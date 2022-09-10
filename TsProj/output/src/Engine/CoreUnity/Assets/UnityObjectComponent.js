"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.UnityObjectComponentBuilder = exports.UnityObjectComponentData = void 0;
const csharp_1 = require("csharp");
const BaseComponent_1 = require("../../Core/Components/BaseComponent");
const ComponentManager_1 = require("../../Core/Components/ComponentManager");
/**
 * The data for a sprite component.
 */
class UnityObjectComponentData {
    name;
    setFromJson(json) {
        if (json.name !== undefined) {
            this.name = String(json.name);
        }
    }
}
exports.UnityObjectComponentData = UnityObjectComponentData;
/**
 * The builder for a sprite component.
 */
class UnityObjectComponentBuilder {
    get type() {
        return "UnityObjectComponent";
    }
    buildFromJson(json) {
        let data = new UnityObjectComponentData();
        data.setFromJson(json);
        return new UnityObjectComponent(data);
    }
}
exports.UnityObjectComponentBuilder = UnityObjectComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends BaseComponent_1.BaseComponent {
    _instanceID;
    _unityGO;
    /**
     * Creates a new SpriteComponent.
     * @param data The data to create from.
     */
    constructor(data) {
        super(data);
    }
    /** Loads this component. */
    load() {
        this._unityGO = csharp_1.UnityEngine.GameObject.Find(this.owner.name);
        super.load();
    }
    /**
     * Renders this component.
     */
    render( /*renderView: RenderView*/) {
        let pos = new csharp_1.UnityEngine.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z);
        let rot = new csharp_1.UnityEngine.Vector3(this.owner.transform.rotation.x, this.owner.transform.rotation.y, this.owner.transform.rotation.z);
        let scale = new csharp_1.UnityEngine.Vector3(this.owner.transform.scale.x, this.owner.transform.scale.y, this.owner.transform.scale.z);
        this._unityGO.transform.localPosition = pos;
        this._unityGO.transform.localEulerAngles = rot;
        this._unityGO.transform.localScale = scale;
        super.render();
    }
}
exports.UnityObjectComponent = UnityObjectComponent;
ComponentManager_1.ComponentManager.registerBuilder(new UnityObjectComponentBuilder());
//# sourceMappingURL=UnityObjectComponent.js.map