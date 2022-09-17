"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.UnityObjectComponentBuilder = exports.UnityObjectComponentData = void 0;
const csharp_1 = require("csharp");
const BaseComponent_1 = require("../../Core/Components/BaseComponent");
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
    _compData;
    _comp;
    _compManager;
    constructor(_compData, _comp, _compManager) {
        this._compData = _compData;
        this._comp = _comp;
        this._compManager = _compManager;
        this._compManager.registerBuilder(this);
    }
    get type() {
        return "UnityObjectComponent";
    }
    buildFromJson(json) {
        this._compData.setFromJson(json);
        this._comp.setData(this._compData);
        return this._comp;
    }
}
exports.UnityObjectComponentBuilder = UnityObjectComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends BaseComponent_1.BaseComponent {
    _instanceID;
    _unityGO;
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
//# sourceMappingURL=UnityObjectComponent.js.map