"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityObjectComponent = exports.UnityObjectComponentBuilder = void 0;
const csharp_1 = require("csharp");
const CommonBehavior_copy_1 = require("../../Core/Components/CommonBehavior copy");
const JsonUtility_1 = require("../../Utility/JsonUtility");
/**
 * The builder for a sprite component.
 */
class UnityObjectComponentBuilder extends CommonBehavior_copy_1.CommonComponentBuilder {
    get type() {
        return "UnityObjectComponent";
    }
}
exports.UnityObjectComponentBuilder = UnityObjectComponentBuilder;
/**
 * A component which renders a two-dimensional image on the screen.
 */
class UnityObjectComponent extends CommonBehavior_copy_1.CommonComponent {
    _unityGO;
    _pos = new csharp_1.UnityEngine.Vector3();
    _rot = new csharp_1.UnityEngine.Vector3();
    _sca = new csharp_1.UnityEngine.Vector3();
    /** Loads this component. */
    load() {
        // this._unityGO = (this._data as UnityObjectComponentData).unityGo;
        let data = JsonUtility_1.JsonUtility.TryGetArrayItmeByName(this.commonData.data, "gameObject");
        let obj = csharp_1.TSEngine.InstanceHUB.Get(data.refID);
        this._unityGO = obj.Value;
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
        this._unityGO.transform.localPosition = this._pos;
        this._unityGO.transform.localEulerAngles = this._rot;
        this._unityGO.transform.localScale = this._sca;
        super.render();
    }
}
exports.UnityObjectComponent = UnityObjectComponent;
//# sourceMappingURL=UnityObjectComponent.js.map