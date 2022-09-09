"use strict";
/// <reference path="ComponentManager.ts" />
/// <reference path="BaseComponent.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.SpriteComponentBuilder = exports.SpriteComponentData = void 0;
/**
 * The data for a sprite component.
 */
class SpriteComponentData {
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
exports.SpriteComponentData = SpriteComponentData;
/**
 * The builder for a sprite component.
 */
class SpriteComponentBuilder {
    get type() {
        return "sprite";
    }
    buildFromJson(json) {
        let data = new SpriteComponentData();
        data.setFromJson(json);
        return new SpriteComponent(data);
    }
}
exports.SpriteComponentBuilder = SpriteComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends BaseComponent {
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
ComponentManager.registerBuilder(new SpriteComponentBuilder());
//# sourceMappingURL=UnityObjectComponent.js.map