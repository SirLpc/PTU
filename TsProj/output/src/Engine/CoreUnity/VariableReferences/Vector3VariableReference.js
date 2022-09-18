"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3VariableReference = void 0;
const Vector3_1 = require("../../Core/Math/Vector3");
const BaseVariableInjectRef_1 = require("../../Core/VariableReferences/BaseVariableInjectRef");
class Vector3VariableReference extends BaseVariableInjectRef_1.BaseVariableRef {
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
//# sourceMappingURL=Vector3VariableReference.js.map