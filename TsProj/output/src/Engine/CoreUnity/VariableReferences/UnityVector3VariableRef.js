"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityVector3VariableRef = void 0;
const csharp_1 = require("csharp");
const Vector3_1 = require("../../Core/Math/Vector3");
const Vector3VariableRef_1 = require("../../Core/VariableReferences/Vector3VariableRef");
class UnityVector3VariableRef extends Vector3VariableRef_1.Vector3VariableRef {
    _value = new Vector3_1.Vector3();
    _v3Variable;
    inject(data) {
        let obj = csharp_1.TSEngine.InstanceHUB.Get(data.refID);
        this._v3Variable = obj;
    }
    get value() {
        this._value.x = this._v3Variable.Value.x;
        this._value.y = this._v3Variable.Value.y;
        this._value.z = this._v3Variable.Value.z;
        return this._value;
    }
    get ijValue() {
        return this._v3Variable;
    }
}
exports.UnityVector3VariableRef = UnityVector3VariableRef;
//# sourceMappingURL=UnityVector3VariableRef.js.map