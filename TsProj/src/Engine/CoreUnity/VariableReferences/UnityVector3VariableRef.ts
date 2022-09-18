import { Puergp, UnityEngine } from "csharp";
import { Vector3 } from "../../Core/Math/Vector3";
import { Vector3VariableRef } from "../../Core/VariableReferences/Vector3VariableRef";

export class Vector3VariableReference extends Vector3VariableRef<Puergp.Variables.Vector3Variable> {

    private _value : Vector3;

    inject(data: any): Vector3 {
        this._value = new Vector3(data.x, data.y, data.z);
        return this._value;
    }
    
    get value(): Vector3 {
        return this._value;
    }
    get ijValue(): Puergp.Variables.Vector3Variable {
        throw new Error("Method not implemented.");
    }

}