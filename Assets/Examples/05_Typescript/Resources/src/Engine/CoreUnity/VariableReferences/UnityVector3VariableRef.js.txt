"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3VariableReference = void 0;
const csharp_1 = require("csharp");
const Vector3_1 = require("../../Core/Math/Vector3");
const Vector3VariableRef_1 = require("../../Core/VariableReferences/Vector3VariableRef");
class Vector3VariableReference extends Vector3VariableRef_1.Vector3VariableRef {
    _value = new Vector3_1.Vector3();
    _v3Variable;
    inject(data) {
        this._v3Variable = csharp_1.TSEngine.InstanceHUB.Get(data.variable.instanceID);
    }
    get value() {
        this._value.x = this._v3Variable.value.x;
        this._value.y = this._v3Variable.value.y;
        this._value.z = this._v3Variable.value.z;
        return this._value;
    }
    get ijValue() {
        return this._v3Variable;
    }
}
exports.Vector3VariableReference = Vector3VariableReference;
//# sourceMappingURL=UnityVector3VariableRef.js.map