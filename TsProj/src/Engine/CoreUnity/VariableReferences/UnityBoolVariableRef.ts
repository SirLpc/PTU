import { Puergp, ScriptableObjectArchitecture, TSEngine, UnityEngine } from "csharp";
import { Vector3 } from "../../Core/Math/Vector3";
import { BoolVariableRef } from "../../Core/VariableReferences/BoolVariableRef";
import { Vector3VariableRef } from "../../Core/VariableReferences/Vector3VariableRef";

export class UnityBoolVariableRef extends BoolVariableRef<ScriptableObjectArchitecture.BoolReference> {

    private _value : boolean = false;
    private _variable: ScriptableObjectArchitecture.BoolReference;

    inject(data: any): void {
        let obj = TSEngine.InstanceHUB.Get(data.refID);
        this._variable = obj as ScriptableObjectArchitecture.BoolReference;
    }
    
    get value(): boolean {
        this._value = this._variable.Value;
        return this._value;
    }
    
    get ijValue(): ScriptableObjectArchitecture.BoolReference {
        return this._variable;
    }

}