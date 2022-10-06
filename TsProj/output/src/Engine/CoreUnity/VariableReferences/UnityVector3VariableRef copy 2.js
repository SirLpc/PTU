"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityBoolVariableRef = void 0;
const csharp_1 = require("csharp");
const BoolVariableRef_1 = require("../../Core/VariableReferences/BoolVariableRef");
class UnityBoolVariableRef extends BoolVariableRef_1.BoolVariableRef {
    _value = false;
    _variable;
    inject(data) {
        let obj = csharp_1.TSEngine.InstanceHUB.Get(data.refID);
        this._variable = obj;
    }
    get value() {
        this._value = this._variable.Value;
        return this._value;
    }
    get ijValue() {
        return this._variable;
    }
}
exports.UnityBoolVariableRef = UnityBoolVariableRef;
//# sourceMappingURL=UnityVector3VariableRef%20copy%202.js.map