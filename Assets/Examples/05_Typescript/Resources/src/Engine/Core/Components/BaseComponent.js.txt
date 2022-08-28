var NT;
(function (NT) {
    class BaseComponent {
        /** The owning entity. */
        _owner;
        _data;
        /**
         * The name of this component.
         */
        name;
        /**
         * Creates a new BaseComponent.
         * @param data The data for this component.
         */
        constructor(data) {
            this._data = data;
            this.name = data.name;
        }
        /** The owning entity. */
        get owner() {
            return this._owner;
        }
        /**
         * Sets the owner of this component.
         * @param owner The owner to be set.
         */
        setOwner(owner) {
            this._owner = owner;
        }
        /** Loads this component. */
        load() {
        }
        /** Performs pre-update procedures on this component. */
        updateReady() {
        }
        /**
         * Updates this component.
         * @param time The amount of time in milliseconds since the last update.
         */
        update(time) {
        }
        /**
         * Renders this component.
         */
        // public render( renderView: RenderView ): void {
        render() {
        }
    }
    NT.BaseComponent = BaseComponent;
})(NT || (NT = {}));
//# sourceMappingURL=BaseComponent.js.map