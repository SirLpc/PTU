"use strict";
/// <reference path="../Objects/TObject.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEntity = void 0;
const Matrix4x4_1 = require("../Math/Matrix4x4");
const Transform_1 = require("../Math/Transform");
const Vector3_1 = require("../Math/Vector3");
const TObject_1 = require("../Objects/TObject");
/**
 * Represents a single entity in the world. TEntities themselves do not get rendered or have behaviors.
 * The do, however, have transforms and may have child TEntities. Components and behaviors may be
 * attached to TEntities to decorate functionality.
 */
class TEntity extends TObject_1.TObject {
    _children = [];
    _parent;
    _isLoaded = false;
    _sceneGraph;
    _components = [];
    _behaviors = [];
    _isVisible = true;
    _localMatrix = Matrix4x4_1.Matrix4x4.identity();
    _worldMatrix = Matrix4x4_1.Matrix4x4.identity();
    /** The name of this object. */
    name;
    /** The transform of this entity. */
    transform = new Transform_1.Transform();
    /**
     * Creates a new entity.
     * @param name The name of this entity.
     * @param sceneGraph The scenegraph to which this entity belongs.
     */
    constructor(name, sceneGraph) {
        super();
        this.name = name;
        this._sceneGraph = sceneGraph;
    }
    /** Returns the parent of this entity. */
    get parent() {
        return this._parent;
    }
    /** Returns the world transformation matrix of this entity. */
    get worldMatrix() {
        return this._worldMatrix;
    }
    /** Indicates if this entity has been loaded. */
    get isLoaded() {
        return this._isLoaded;
    }
    /** Indicates if this entity is currently visible. */
    get isVisible() {
        return this._isVisible;
    }
    /** Sets visibility of this entity. */
    set isVisible(value) {
        this._isVisible = value;
    }
    /**
     * Adds the provided entity as a child of this one.
     * @param child The child to be added.
     */
    addChild(child) {
        child._parent = this;
        this._children.push(child);
        child.onAdded(this._sceneGraph);
    }
    /**
     * Attempts to remove the provided entity as a child of this one, if it is in fact
     * a child of this entity. Otherwise, nothing happens.
     * @param child The child to be added.
     */
    removeChild(child) {
        let index = this._children.indexOf(child);
        if (index !== -1) {
            child._parent = undefined;
            this._children.splice(index, 1);
        }
    }
    /**
     * Recursively attempts to retrieve a component with the given name from this entity or its children.
     * @param name The name of the component to retrieve.
     */
    getComponentByName(name) {
        for (let component of this._components) {
            if (component.name === name) {
                return component;
            }
        }
        for (let child of this._children) {
            let component = child.getComponentByName(name);
            if (component !== undefined) {
                return component;
            }
        }
        return undefined;
    }
    /**
    * Recursively attempts to retrieve a behavior with the given name from this entity or its children.
    * @param name The name of the behavior to retrieve.
    */
    getBehaviorByName(name) {
        for (let behavior of this._behaviors) {
            if (behavior.name === name) {
                return behavior;
            }
        }
        for (let child of this._children) {
            let behavior = child.getBehaviorByName(name);
            if (behavior !== undefined) {
                return behavior;
            }
        }
        return undefined;
    }
    /**
    * Recursively attempts to retrieve a child entity with the given name from this entity or its children.
    * @param name The name of the entity to retrieve.
    */
    getEntityByName(name) {
        if (this.name === name) {
            return this;
        }
        for (let child of this._children) {
            let result = child.getEntityByName(name);
            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    }
    /**
     * Adds the given component to this entity.
     * @param component The component to be added.
     */
    addComponent(component) {
        this._components.push(component);
        component.setOwner(this);
    }
    /**
     * Adds the given behavior to this entity.
     * @param behavior The behavior to be added.
     */
    addBehavior(behavior) {
        this._behaviors.push(behavior);
        behavior.setOwner(this);
    }
    /** Performs loading procedures on this entity. */
    load() {
        this._isLoaded = true;
        for (let c of this._components) {
            c.load();
        }
        for (let c of this._behaviors) {
            c.load();
        }
        for (let c of this._children) {
            c.load();
        }
    }
    /** Performs pre-update procedures on this entity. */
    updateReady() {
        for (let c of this._components) {
            c.updateReady();
        }
        for (let b of this._behaviors) {
            b.updateReady();
        }
        for (let c of this._children) {
            c.updateReady();
        }
    }
    /**
     * Performs update procedures on this entity (recurses through children,
     * components and behaviors as well).
     * @param time The delta time in milliseconds since the last update call.
     */
    update(time) {
        this._localMatrix = this.transform.getTransformationMatrix();
        this.updateWorldMatrix((this._parent !== undefined) ? this._parent.worldMatrix : undefined);
        for (let c of this._components) {
            c.update(time);
        }
        for (let b of this._behaviors) {
            b.update(time);
        }
        for (let c of this._children) {
            c.update(time);
        }
    }
    /**
     * Renders this entity and its children.
     */
    //public render( renderView: RenderView ): void {
    render() {
        if (!this._isVisible) {
            return;
        }
        for (let c of this._components) {
            c.render();
        }
        for (let c of this._behaviors) {
            c.render();
        }
        for (let c of this._children) {
            c.render();
        }
    }
    /** Returns the world position of this entity. */
    getWorldPosition() {
        return new Vector3_1.Vector3(this._worldMatrix.data[12], this._worldMatrix.data[13], this._worldMatrix.data[14]);
    }
    /**
     * Called when this entity is added to a scene graph.
     * @param sceneGraph The scenegraph to which this entity was added.
     */
    onAdded(sceneGraph) {
        this._sceneGraph = sceneGraph;
    }
    updateWorldMatrix(parentWorldMatrix) {
        if (parentWorldMatrix !== undefined) {
            this._worldMatrix = Matrix4x4_1.Matrix4x4.multiply(parentWorldMatrix, this._localMatrix);
        }
        else {
            this._worldMatrix.copyFrom(this._localMatrix);
        }
    }
}
exports.TEntity = TEntity;
//# sourceMappingURL=TEntity.js.map