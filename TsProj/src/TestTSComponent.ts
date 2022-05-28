import {ATSComponent} from "./CoreFramework/TSComponentHub";
import { UnityEngine } from "csharp";

export class TestTSComponent extends ATSComponent{
    public enableUpdate: boolean;
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

        let s = new Son("aa");
        //s.Init();
        UnityEngine.Debug.Log(s.var2);
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

class Parent {
    public var1: string;
    constructor(para: string) {
        this.Init();
    }

    public Init():void {}
}

class Son extends Parent {
    public var2: string;

    // constructor(para: string) {
    //     super(para);
    // }

    public override Init():void {
        super.Init();

        UnityEngine.Debug.Log("Init called method.");

        this.var2 = "inited";
    }
}