import { UnityEngine } from "csharp";
import { Vector3 } from "../../Core/Math/Vector3";
import { BaseVariableInjectReference } from "../../Core/VariableReferences/BaseVariableInjectReference";

export class Vector3VariableReference extends BaseVariableInjectReference<Vector3, UnityEngine.Vector3> {

    private _value : Vector3;

    inject(data: any): Vector3 {
        this._value = new Vector3(data.x, data.y, data.z);
        return this._value;
    }
    
    get value(): Vector3 {
        return this._value;
    }
    get ijValue(): UnityEngine.Vector3 {
        throw new Error("Method not implemented.");
    }

}