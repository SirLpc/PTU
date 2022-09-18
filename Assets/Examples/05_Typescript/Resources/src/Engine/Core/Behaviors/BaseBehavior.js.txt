"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBehavior = void 0;
/**
 * The base behavior type from which all behaviors should inherit.
 * This class cannot be instatiated directly.
 */
class BaseBehavior {
    name;
    /**
     * The data associated with this behavior.
     */
    _data;
    /**
     * The owning entity of this behavior.
     */
    _owner;
    /**
     * Applys this behavior with the given user data.
     * @param userData The user data to be applied.
     */
    apply(data) {
        this._data = data;
        this.name = data.name;
        return this;
    }
    /**
     * Sets the owner entity.
     * @param owner The owner.
     */
    setOwner(owner) {
        this._owner = owner;
    }
    /**
     * Performs pre-update procedures on this behavior.
     */
    updateReady() {
    }
    /**
     * Performs update procedures on this behavior.
     * @param time The delta time in milliseconds since the last update.
     */
    update(time) {
    }
}
exports.BaseBehavior = BaseBehavior;
//# sourceMappingURL=BaseBehavior.js.map