"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECS = exports.System = void 0;
/**
 * A Component is a bundle of state. Each instance of a Component is
 * associated with a single Entity.
 *
 * Components have no API to fulfill.
 */
class Component {
}
/**
 * A System cares about a set of Components. It will run on every Entity
 * that has that set of Components.
 *
 * A System must specify two things:
 *
 *  (1) The immutable set of Components it needs at compile time. (Its
 *      immutability isn't enforced by anything but my wrath.) We use the
 *      type `Function` to refer to a Component's class; i.e., `Position`
 *      (class) rather than `new Position()` (instance).
 *
 *  (2) An update() method for what to do every frame (if anything).
 */
class System {
    /**
     * The ECS is given to all Systems. Systems contain most of the game
     * code, so they need to be able to create, mutate, and destroy
     * Entities and Components.
     */
    ecs;
}
exports.System = System;
/**
 * This custom container is so that calling code can provide the
 * Component *instance* when adding (e.g., add(new Position(...))), and
 * provide the Component *class* otherwise (e.g., get(Position),
 * has(Position), delete(Position)).
 *
 * We also use two different types to refer to the Component's class:
 * `Function` and `ComponentClass<T>`. We use `Function` in most cases
 * because it is simpler to write. We use `ComponentClass<T>` in the
 * `get()` method, when we want TypeScript to know the type of the
 * instance that is returned. Just think of these both as referring to
 * the same thing: the underlying class of the Component.
 *
 * You might notice a footgun here: code that gets this object can
 * directly modify the Components inside (with add(...) and delete(...)).
 * This would screw up our ECS bookkeeping of mapping Systems to
 * Entities! We'll fix this later by only returning callers a view onto
 * the Components that can't change them.
 */
class ComponentContainer {
    map = new Map();
    add(component) {
        this.map.set(component.constructor, component);
    }
    get(componentClass) {
        return this.map.get(componentClass);
    }
    has(componentClass) {
        return this.map.has(componentClass);
    }
    hasAll(componentClasses) {
        for (let cls of componentClasses) {
            if (!this.map.has(cls)) {
                return false;
            }
        }
        return true;
    }
    delete(componentClass) {
        this.map.delete(componentClass);
    }
}
/**
 * The ECS is the main driver; it's the backbone of the engine that
 * coordinates Entities, Components, and Systems. You could have a single
 * one for your game, or make a different one for every level, or have
 * multiple for different purposes.
 */
class ECS {
    // Main state
    entities = new Map();
    systems = new Map();
    // Bookkeeping for entities.
    nextEntityID = 0;
    entitiesToDestroy = new Array();
    // API: Entities
    addEntity() {
        let entity = this.nextEntityID;
        this.nextEntityID++;
        this.entities.set(entity, new ComponentContainer());
        return entity;
    }
    /**
     * Marks `entity` for removal. The actual removal happens at the end
     * of the next `update()`. This way we avoid subtle bugs where an
     * Entity is removed mid-`update()`, with some Systems seeing it and
     * others not.
     */
    removeEntity(entity) {
        this.entitiesToDestroy.push(entity);
    }
    // API: Components
    addComponent(entity, component) {
        this.entities.get(entity).add(component);
        this.checkE(entity);
    }
    getComponents(entity) {
        return this.entities.get(entity);
    }
    removeComponent(entity, componentClass) {
        this.entities.get(entity).delete(componentClass);
        this.checkE(entity);
    }
    // API: Systems
    addSystem(system) {
        // Give system a reference to the ECS so it can actually do
        // anything.
        system.ecs = this;
        // Save system and set who it should track immediately.
        this.systems.set(system, new Set());
        for (let entity of this.entities.keys()) {
            this.checkES(entity, system);
        }
    }
    /**
     * Note: I never actually had a removeSystem() method for the entire
     * time I was programming the game Fallgate (2 years!). I just added
     * one here for a specific testing reason (see the next post).
     * Because it's just for demo purposes, this requires an actual
     * instance of a System to remove (which would be clunky as a real
     * API).
     */
    removeSystem(system) {
        this.systems.delete(system);
    }
    /**
     * This is ordinarily called once per tick (e.g., every frame). It
     * updates all Systems, then destroys any Entities that were marked
     * for removal.
     */
    update() {
        // Update all systems. (Later, we'll add a way to specify the
        // update order.)
        for (let [system, entities] of this.systems.entries()) {
            system.update(entities);
        }
        // Remove any entities that were marked for deletion during the
        // update.
        while (this.entitiesToDestroy.length > 0) {
            this.destroyEntity(this.entitiesToDestroy.pop());
        }
    }
    // Private methods for doing internal state checks and mutations.
    destroyEntity(entity) {
        this.entities.delete(entity);
        for (let entities of this.systems.values()) {
            entities.delete(entity); // no-op if doesn't have it
        }
    }
    checkE(entity) {
        for (let system of this.systems.keys()) {
            this.checkES(entity, system);
        }
    }
    checkES(entity, system) {
        let need = system.componentsRequired;
        if (need.size != 0) {
            let have = this.entities.get(entity);
            if (have.hasAll(need)) {
                // should be in system
                this.systems.get(system).add(entity); // no-op if in
            }
            else {
                // should not be in system
                this.systems.get(system).delete(entity); // no-op if out
            }
        }
        else {
            if (this.systems.get(system).size != 0) {
                this.systems.get(system).clear();
            }
        }
    }
}
exports.ECS = ECS;
//# sourceMappingURL=ECS.js.map