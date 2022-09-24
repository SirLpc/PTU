"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.UnityObjectComponentBuilder = exports.UnityObjectComponentData = void 0;
const csharp_1 = require("csharp");
const BaseComponent_1 = require("../../Core/Components/BaseComponent");
const JsonUtility_1 = require("../../Utility/JsonUtility");
/**
 * The data for a sprite component.
 */
class UnityObjectComponentData {
    name;
    unityGo;
    setFromJson(json) {
        if (json.name !== undefined) {
            this.name = String(json.name);
        }
        if (json.data !== undefined) {
            let data = JsonUtility_1.JsonUtility.TryGetArrayItmeByName(json.data, "gameObject");
            let obj = csharp_1.TSEngine.InstanceHUB.Get(data.refID);
            this.unityGo = obj.Value;
        }
        else {
            throw new Error("UnityObjectComponentData need a data with gameObject field.");
        }
        return this;
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
        let data = this._compData().setFromJson(json);
        let comp = this._comp().setData(data);
        return comp;
    }
}
exports.UnityObjectComponentBuilder = UnityObjectComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends BaseComponent_1.BaseComponent {
    _unityGO;
    _pos = new csharp_1.UnityEngine.Vector3();
    _rot = new csharp_1.UnityEngine.Vector3();
    _sca = new csharp_1.UnityEngine.Vector3();
    /** Loads this component. */
    load() {
        this._unityGO = this._data.unityGo;
        super.load();
    }
    /**
     * Renders this component.
     */
    render( /*renderView: RenderView*/) {
        this._pos.x = this.owner.transform.position.x;
        this._pos.y = this.owner.transform.position.y;
        this._pos.z = this.owner.transform.position.z;
        this._rot.x = this.owner.transform.rotation.x;
        this._rot.y = this.owner.transform.rotation.y;
        this._rot.z = this.owner.transform.rotation.z;
        this._sca.x = this.owner.transform.scale.x;
        this._sca.y = this.owner.transform.scale.y;
        this._sca.z = this.owner.transform.scale.z;
        // pos : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z);
        // rot : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.rotation.x, this.owner.transform.rotation.y, this.owner.transform.rotation.z);
        // scal = new UnityEngine.Vector3(this.owner.transform.scale.x, this.owner.transform.scale.y, this.owner.transform.scale.z);
        this._unityGO.transform.localPosition = this._pos;
        this._unityGO.transform.localEulerAngles = this._rot;
        this._unityGO.transform.localScale = this._sca;
        super.render();
    }
}
exports.UnityObjectComponent = UnityObjectComponent;
//# sourceMappingURL=UnityObjectComponent.js.map