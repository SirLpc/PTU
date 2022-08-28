var NT;
(function (NT) {
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
         * Creates a new base behavior.
         * @param data The data to be used when creating this object.
         */
        constructor(data) {
            this._data = data;
            this.name = this._data.name;
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
        /**
         * Applys this behavior with the given user data.
         * @param userData The user data to be applied.
         */
        apply(userData) {
        }
    }
    NT.BaseBehavior = BaseBehavior;
})(NT || (NT = {}));
//# sourceMappingURL=BaseBehavior.js.map