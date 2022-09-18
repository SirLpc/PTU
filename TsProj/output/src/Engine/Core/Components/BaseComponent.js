"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
class BaseComponent {
    /** The owning entity. */
    _owner;
    _data;
    /**
     * The name of this component.
     */
    name;
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
    /**
     * Sets the data of this component.
     * @param data The data for this component.
     */
    setData(data) {
        this._data = data;
        this.name = data.name;
        return this;
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
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=BaseComponent.js.map