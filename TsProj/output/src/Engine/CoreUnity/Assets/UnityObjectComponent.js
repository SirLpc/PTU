"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.UnityObjectComponentBuilder = exports.UnityObjectComponentData = void 0;
const BaseComponent_1 = require("../../Core/Components/BaseComponent");
const ComponentManager_1 = require("../../Core/Components/ComponentManager");
/**
 * The data for a sprite component.
 */
class UnityObjectComponentData {
    name;
    materialName;
    origin = Vector3.zero;
    width;
    height;
    setFromJson(json) {
        if (json.name !== undefined) {
            this.name = String(json.name);
        }
        if (json.width !== undefined) {
            this.width = Number(json.width);
        }
        if (json.height !== undefined) {
            this.height = Number(json.height);
        }
        if (json.materialName !== undefined) {
            this.materialName = String(json.materialName);
        }
        if (json.origin !== undefined) {
            this.origin.setFromJson(json.origin);
        }
    }
}
exports.UnityObjectComponentData = UnityObjectComponentData;
/**
 * The builder for a sprite component.
 */
class UnityObjectComponentBuilder {
    get type() {
        return "sprite";
    }
    buildFromJson(json) {
        let data = new SpriteComponentData();
        data.setFromJson(json);
        return new SpriteComponent(data);
    }
}
exports.UnityObjectComponentBuilder = UnityObjectComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends BaseComponent_1.BaseComponent {
    _sprite;
    _width;
    _height;
    /**
     * Creates a new SpriteComponent.
     * @param data The data to create from.
     */
    constructor(data) {
        super(data);
        this._width = data.width;
        this._height = data.height;
        this._sprite = new Sprite(name, data.materialName, this._width, this._height);
        if (!data.origin.equals(Vector3.zero)) {
            this._sprite.origin.copyFrom(data.origin);
        }
    }
    /** Loads this component. */
    load() {
        this._sprite.load();
    }
    /**
     * Renders this component.
     */
    render(renderView) {
        this._sprite.draw(this.owner.worldMatrix, renderView.viewMatrix, renderView.projectionMatrix);
        super.render(renderView);
    }
}
exports.UnityObjectComponent = UnityObjectComponent;
ComponentManager_1.ComponentManager.registerBuilder(new UnityObjectComponentBuilder());
//# sourceMappingURL=UnityObjectComponent.js.map