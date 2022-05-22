import {ATSComponent} from "./CoreFramework/TSComponentHub";
import { UnityEngine } from "csharp";

export class TestTSComponent extends ATSComponent{
    public override Awake(): void {
        super.Awake();

        UnityEngine.Debug.Log("awkae");
    }

    public override OnEnable() : void{
        super.OnEnable();
        
        UnityEngine.Debug.Log("on enable");
    }

    public override Start(): void {
        super.OnEnable();
        
        UnityEngine.Debug.Log("start");
    }
    
    public override Update(): void {
        super.Update();
        
        UnityEngine.Debug.Log("update..");
    }

    public override OnDisable() : void{
        super.OnDisable();
        
        UnityEngine.Debug.Log("on disable");
    }
    
    public override OnDestroy(): void {
        super.OnDestroy();

        UnityEngine.Debug.Log("on destroy");
    }
}