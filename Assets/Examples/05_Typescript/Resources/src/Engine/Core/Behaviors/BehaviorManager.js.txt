"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorManager = void 0;
/**
 * Manages behaviors in the system.
 */
class BehaviorManager {
    static _registeredBuilders = {};
    /**
     * Registers a given builder with this manager.
     * @param builder The builder to be registered.
     */
    static registerBuilder(builder) {
        BehaviorManager._registeredBuilders[builder.type] = builder;
    }
    /**
     * Attempts to extract a behavior from the provided json.
     * @param json The json to extract a behavior from.
     */
    static extractBehavior(json) {
        if (json.type !== undefined) {
            if (BehaviorManager._registeredBuilders[String(json.type)] !== undefined) {
                return BehaviorManager._registeredBuilders[String(json.type)].buildFromJson(json);
            }
            throw new Error("Behavior manager error - type is missing or builder is not registered for this type.");
        }
    }
}
exports.BehaviorManager = BehaviorManager;
//# sourceMappingURL=BehaviorManager.js.map