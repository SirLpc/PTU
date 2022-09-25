"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBehaviour = exports.MoveBehaviorBuilder = void 0;
const CommonComponent_1 = require("../Components/CommonComponent");
const BaseBehaviorComponent_1 = require("./BaseBehaviorComponent");
/** The builder for a rotation behavior. */
class MoveBehaviorBuilder extends CommonComponent_1.CommonComponentBuilder {
    get type() {
        return "move";
    }
}
exports.MoveBehaviorBuilder = MoveBehaviorBuilder;
/**
 * A behavior which continuously rotates the object to which it is attached by the
 * configured amount.
 */
class MoveBehaviour extends BaseBehaviorComponent_1.BaseBehaviorComponent {
    _position;
    constructor(_position) {
        super();
        this._position = _position;
    }
    load() {
        this.commonData.injectField(this._position, "position");
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