import { Puergp, ScriptableObjectArchitecture, TSEngine, UnityEngine } from "csharp";
import { Vector3 } from "../../Core/Math/Vector3";
import { Vector3VariableRef } from "../../Core/VariableReferences/Vector3VariableRef";

export class UnityGameObjectVariableReference extends Vector3VariableRef<ScriptableObjectArchitecture.Vector3Reference> {

    private _value : Vector3 = new Vector3();
    private _v3Variable: ScriptableObjectArchitecture.Vector3Reference;

    inject(data: any): void {
        let obj = TSEngine.InstanceHUB.Get(data.refID);
        this._v3Variable = obj as ScriptableObjectArchitecture.Vector3Reference;
    }
    
    get value(): Vector3 {
        this._value.x = this._v3Variable.Value.x;
        this._value.y = this._v3Variable.Value.y;
        this._value.z = this._v3Variable.Value.z;
        return this._value;
    }
    
    get ijValue(): ScriptableObjectArchitecture.Vector3Reference {
        return this._v3Variable;
    }

}