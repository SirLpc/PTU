"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorManager = void 0;
/**
 * Manages behaviors in the system.
 */
class BehaviorManager {
    _registeredBuilders = {};
    /**
     * Registers a given builder with this manager.
     * @param builder The builder to be registered.
     */
    registerBuilder(builder) {
        this._registeredBuilders[builder.type] = builder;
    }
    /**
     * Attempts to extract a behavior from the provided json.
     * @param json The json to extract a behavior from.
     */
    extractBehavior(json) {
        if (json.type !== undefined) {
            if (this._registeredBuilders[String(json.type)] !== undefined) {
                return this._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error("Behavior manager error - type is missing or builder is not registered for this type: " + json.type);
        }
    }
}
exports.BehaviorManager = BehaviorManager;
//# sourceMappingURL=BehaviorManager.js.map