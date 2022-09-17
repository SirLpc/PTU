"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentManager = void 0;
/**
 * Manages components and their creation.
 */
class ComponentManager {
    _registeredBuilders = {};
    /**
     * Registers the provided builder.
     * @param builder The builder to register.
     */
    registerBuilder(builder) {
        this._registeredBuilders[builder.type] = builder;
    }
    /**
     * Extracts a component from the provided json.
     * @param json The json to extract from.
     */
    extractComponent(json) {
        if (json.type !== undefined) {
            if (this._registeredBuilders[String(json.type)] !== undefined) {
                return this._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error("Behavior manager error - type is missing or builder is not registered for this type: " + json.type);
        }
    }
}
exports.ComponentManager = ComponentManager;
//# sourceMappingURL=ComponentManager.js.map