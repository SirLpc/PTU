import {TSComponent} from "./CoreFramework/TSComponentHub";
import { UnityEngine } from "csharp";

export class TestTSComponent extends TSComponent{
    enableUpdate: boolean = true;
    public OnEnable() : void{
        super.OnEnable();
        
        UnityEngine.Debug.Log("on enable");
    }
    
    public Update(): void {
        super.Update();
        
        UnityEngine.Debug.Log("update..");
    }

    public OnDisable() : void{
        super.OnDisable();
        
        UnityEngine.Debug.Log("on disable");
    }
    
    public OnDestroy(): void {
        super.OnDestroy();

        UnityEngine.Debug.Log("on destroy");
    }
}