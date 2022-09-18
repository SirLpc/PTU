"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3VariableReference = void 0;
const Vector3_1 = require("../../Core/Math/Vector3");
const Vector3VariableRef_1 = require("../../Core/VariableReferences/Vector3VariableRef");
class Vector3VariableReference extends Vector3VariableRef_1.Vector3VariableRef {
    _value;
    inject(data) {
        this._value = new Vector3_1.Vector3(data.x, data.y, data.z);
        return this._value;
    }
    get value() {
        return this._value;
    }
    get ijValue() {
        throw new Error("Method not implemented.");
    }
}
exports.Vector3VariableReference = Vector3VariableReference;
//# sourceMappingURL=UnityVector3VariableRef.js.map