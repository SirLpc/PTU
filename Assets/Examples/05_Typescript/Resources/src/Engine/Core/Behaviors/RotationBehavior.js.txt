"use strict";
/// <reference path="BaseBehavior.ts" />
/// <reference path="BehaviorManager.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationBehavior = exports.RotationBehaviorBuilder = exports.RotationBehaviorData = void 0;
const Vector3_1 = require("../Math/Vector3");
const BaseBehavior_1 = require("./BaseBehavior");
const BehaviorManager_1 = require("./BehaviorManager");
/**
 * The data for a rotation behavior.
 */
class RotationBehaviorData {
    /** The name of the behavior. */
    name;
    /** The rotation amounts to be added per update. */
    rotation = Vector3_1.Vector3.zero;
    /**
     * Sets the properties of this data from the provided json.
     * @param json The json to set from.
     */
    setFromJson(json) {
        if (json.name === undefined) {
            throw new Error("Name must be defined in behavior data.");
        }
        this.name = String(json.name);
        if (json.rotation !== undefined) {
            this.rotation.setFromJson(json.rotation);
        }
    }
}
exports.RotationBehaviorData = RotationBehaviorData;
/** The builder for a rotation behavior. */
class RotationBehaviorBuilder {
    get type() {
        return "rotation";
    }
    buildFromJson(json) {
        let data = new RotationBehaviorData();
        data.setFromJson(json);
        return new RotationBehavior(data);
    }
}
exports.RotationBehaviorBuilder = RotationBehaviorBuilder;
/**
 * A behavior which continuously rotates the object to which it is attached by the
 * configured amount.
 */
class RotationBehavior extends BaseBehavior_1.BaseBehavior {
    _rotation;
    /**
     * Creates a new RotationBehavior.
     * @param data The data for this behavior.
     */
    constructor(data) {
        super(data);
        this._rotation = data.rotation;
    }
    /**
     * Performs update procedures on this behavior.
     * @param time The time in milliseconds since the last update.
     */
    update(time) {
        this._owner.transform.rotation.add(this._rotation);
        super.update(time);
    }
}
exports.RotationBehavior = RotationBehavior;
BehaviorManager_1.BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
//# sourceMappingURL=RotationBehavior.js.map