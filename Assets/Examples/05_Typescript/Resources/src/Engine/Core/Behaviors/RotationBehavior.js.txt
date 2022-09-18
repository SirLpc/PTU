"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationBehavior = exports.RotationBehaviorBuilder = exports.RotationBehaviorData = void 0;
const BaseBehavior_1 = require("./BaseBehavior");
/**
 * The data for a rotation behavior.
 */
class RotationBehaviorData {
    /** The name of the behavior. */
    name;
    /** The rotation amounts to be added per update. */
    rotation;
    constructor(rotation) {
        this.rotation = rotation;
    }
    /**
     * Sets the properties of this data from the provided json.
     * @param json The json to set from.
     */
    setFromJson(json) {
        if (json.name === undefined) {
            throw new Error("Name must be defined in behavior data.");
        }
        this.name = String(json.behaviourName);
        if (json.rotation !== undefined) {
            this.rotation.inject(json.rotation);
        }
        return this;
    }
}
exports.RotationBehaviorData = RotationBehaviorData;
/** The builder for a rotation behavior. */
class RotationBehaviorBuilder {
    _data;
    _behaviour;
    _behaviourManager;
    constructor(_data, _behaviour, _behaviourManager) {
        this._data = _data;
        this._behaviour = _behaviour;
        this._behaviourManager = _behaviourManager;
        this._behaviourManager.registerBuilder(this);
    }
    get type() {
        return "rotation";
    }
    buildFromJson(json) {
        let data = this._data().setFromJson(json);
        let behaviour = this._behaviour().apply(data);
        return behaviour;
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
     * Apply data on RotationBehavior.
     * @param data The data for this behavior.
     */
    apply(userData) {
        this._rotation = userData.rotation;
        return this;
    }
    /**
     * Performs update procedures on this behavior.
     * @param time The time in milliseconds since the last update.
     */
    update(time) {
        this._owner.transform.rotation.add(this._rotation.value);
        super.update(time);
    }
}
exports.RotationBehavior = RotationBehavior;
//# sourceMappingURL=RotationBehavior.js.map