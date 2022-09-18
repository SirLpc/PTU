import { Puergp, TSEngine, UnityEngine } from "csharp";
import { Vector3 } from "../../Core/Math/Vector3";
import { Vector3VariableRef } from "../../Core/VariableReferences/Vector3VariableRef";

export class Vector3VariableReference extends Vector3VariableRef<Puergp.Variables.Vector3Variable> {

    private _value : Vector3 = new Vector3();
    private _v3Variable: Puergp.Variables.Vector3Variable;

    inject(data: any): void {
        this._v3Variable = TSEngine.InstanceHUB.Get(data.variable.instanceID) as Puergp.Variables.Vector3Variable;
    }
    
    get value(): Vector3 {
        this._value.x = this._v3Variable.value.x;
        this._value.y = this._v3Variable.value.y;
        this._value.z = this._v3Variable.value.z;
        return this._value;
    }
    get ijValue(): Puergp.Variables.Vector3Variable {
        return this._v3Variable;
    }

}