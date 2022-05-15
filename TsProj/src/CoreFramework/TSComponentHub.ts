import { Puergp, UnityEngine } from "csharp";
import {EventTool} from "./EventTool";
import { $typeof } from "puerts";

export abstract class ATSComponent {
    public constructor(unityGo : UnityEngine.GameObject, enableUpdate : boolean) {
        this.gameObject = unityGo;
        this.enableUpdate = enableUpdate;
        TSComponentHub.Register(this);

        this.Awake();
    };

    public gameObject : UnityEngine.GameObject;
    public enableUpdate : boolean;
    public Awake() : void {};
    public OnEnable() : void {};
    public Update() : void {};
    public OnDisable() : void {};
    public OnDestroy() : void {};
}

export class TSComponentHub {

    private static _instance : TSComponentHub;
    
    private _gameObjectOnEnableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDisableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDestroyEvent : Puergp.Events.GameObjectEvent;
    
    private _tsComponents : Map<number, Set<ATSComponent>> = new Map<number, Set<ATSComponent>>();

    public static Init(): void {
        TSComponentHub._instance = new TSComponentHub();
    }
    
    public static Tick(): void {
        TSComponentHub._instance.UpdateTSComponents();
    }
    
    public static Register(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            TSComponentHub._instance._tsComponents.set(unityGoID, new Set<ATSComponent>());
        }
        
        TSComponentHub._instance._tsComponents.get(unityGoID).add(tsComp);
        tsComp.gameObject.GetOrAddComponent($typeof(Puergp.TSComponentEventHelper));
    }
    
    public static Unregister(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        TSComponentHub._instance._tsComponents.get(unityGoID).delete(tsComp);
        tsComp.gameObject = null;
    }

    constructor() {
        this.SetupEvents()
    }

    private SetupEvents(): void {
        this._gameObjectOnEnableEvent = EventTool.Get("BuiltIn/GameObjectOnEnableEvent");
        this._gameObjectOnDisableEvent = EventTool.Get("BuiltIn/GameObjectOnDisableEvent");
        this._gameObjectOnDestroyEvent = EventTool.Get("BuiltIn/GameObjectOnDestroyEvent");

        this._gameObjectOnEnableEvent.Register(this.OnGameObjectEnable.bind(this));
        this._gameObjectOnDisableEvent.Register(this.OnGameObjectDisable.bind(this));
        this._gameObjectOnDestroyEvent.Register(this.OnGameObjectDestroy.bind(this));
    }
    
    private OnGameObjectEnable(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnEnable();
        }
    }

    private OnGameObjectDisable(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnDisable();
        }
    }

    private OnGameObjectDestroy(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnDestroy();
        }
        
        TSComponentHub._instance._tsComponents.delete(unityGoID)
    }
    
    private UpdateTSComponents(): void {
       for (const tsComps of TSComponentHub._instance._tsComponents.values()) {
           if (tsComps.size == 0) {
               continue;
           }
           
           for (const tsComp of tsComps) {
               if (tsComp.enableUpdate && tsComp.gameObject.activeInHierarchy) {
                   tsComp.Update();
               }
           }
       } 
    }
}