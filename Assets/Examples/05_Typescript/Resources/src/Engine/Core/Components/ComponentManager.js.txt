"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentManager = void 0;
/**
 * Manages components and their creation.
 */
class ComponentManager {
    static _registeredBuilders = {};
    /**
     * Registers the provided builder.
     * @param builder The builder to register.
     */
    static registerBuilder(builder) {
        ComponentManager._registeredBuilders[builder.type] = builder;
    }
    /**
     * Extracts a component from the provided json.
     * @param json The json to extract from.
     */
    static extractComponent(json) {
        if (json.type !== undefined) {
            if (ComponentManager._registeredBuilders[String(json.type)] !== undefined) {
                return ComponentManager._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error("Behavior manager error - type is missing or builder is not registered for this type: " + json.type);
        }
    }
}
exports.ComponentManager = ComponentManager;
//# sourceMappingURL=ComponentManager.js.map