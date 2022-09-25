"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBehaviour = exports.MoveBehaviorBuilder = void 0;
const BaseBehavior_1 = require("./BaseBehavior");
const CommonBehavior_1 = require("./CommonBehavior");
/** The builder for a rotation behavior. */
class MoveBehaviorBuilder extends CommonBehavior_1.CommonBehaviorBuilder {
    get type() {
        return "move";
    }
}
exports.MoveBehaviorBuilder = MoveBehaviorBuilder;
/**
 * A behavior which continuously rotates the object to which it is attached by the
 * configured amount.
 */
class MoveBehaviour extends BaseBehavior_1.BaseBehavior {
    _position;
    constructor(_position) {
        super();
        this._position = _position;
    }
    /**
     * Apply data on RotationBehavior.
     * @param data The data for this behavior.
     */
    apply(userData) {
        userData.injectField(this._position, "position");
        return this;
    }
    /**
     * Performs update procedures on this behavior.
     * @param time The time in milliseconds since the last update.
     */
    update(time) {
        this._owner.transform.position.add(this._position.value);
        super.update(time);
    }
}
exports.MoveBehaviour = MoveBehaviour;
//# sourceMappingURL=MoveBehaviour.js.map