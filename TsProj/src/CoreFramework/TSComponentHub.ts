import { Puergp, UnityEngine } from "csharp";
import {EventTool} from "./EventTool";
import { $typeof } from "puerts";
import { App } from "./App";

export abstract class ATSComponent {
    public gameObject : UnityEngine.GameObject;
    public enableUpdate : boolean;
    public Awake() : void {};
    public OnEnable() : void {};
    public Start() : void {};
    public Update() : void {};
    public OnDisable() : void {};
    public OnDestroy() : void {};

    public constructor(unityGo : UnityEngine.GameObject, enableUpdate : boolean) {
        this.gameObject = unityGo;
        this.enableUpdate = enableUpdate;
        TSComponentHub.Register(this);

        this.Awake();
    };

    public GetTSComponet<TSComp extends ATSComponent>(targetCompType: (new (unityGo : UnityEngine.GameObject, enableUpdate : boolean) => TSComp)): TSComp {
        return TSComponentHub.GetTSComponet(this, targetCompType);
    }

    public GetTSComponetInChildren<TSComp extends ATSComponent>(targetCompType: (new (unityGo : UnityEngine.GameObject, enableUpdate : boolean) => TSComp)): TSComp {
        return TSComponentHub.GetTSComponetInChildren(this, targetCompType);
    }
}


class TSComponentEntry {
    constructor(public instanceID: number, public gameObject: UnityEngine.GameObject, public tsComponents: Set<ATSComponent>) 
    {}
}


export class TSComponentHub {

    private static _instance : TSComponentHub;
    
    private _gameObjectOnEnableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDisableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDestroyEvent : Puergp.Events.GameObjectEvent;
    
    private _tsComponents : Map<number, TSComponentEntry> = new Map<number, TSComponentEntry>();
    private _firstOnEnableComponents : Set<ATSComponent> = new Set<ATSComponent>();
    private _firstStartComponents : Set<ATSComponent> = new Set<ATSComponent>();

    //public static get registeredTSComponents(): 

    public static Init(): void {
        TSComponentHub._instance = new TSComponentHub();
    }
    
    public static Tick(): void {
        TSComponentHub._instance.FirstOnEnableTSComponents();
        TSComponentHub._instance.FirstStartTSComponents();
        TSComponentHub._instance.UpdateTSComponents();
    }
    
    public static Register(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            const entry = new TSComponentEntry(unityGoID, tsComp.gameObject, new Set<ATSComponent>())
            TSComponentHub._instance._tsComponents.set(unityGoID, entry);

        }
        
        TSComponentHub._instance._firstOnEnableComponents.add(tsComp);
        TSComponentHub._instance._firstStartComponents.add(tsComp);
        TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents.add(tsComp);
        
        tsComp.gameObject.GetOrAddComponent($typeof(Puergp.TSComponentEventHelper));
    }
    
    public static Unregister(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents.delete(tsComp);
        tsComp.gameObject = null;
    }

    public static GetTSComponet<TSComp extends ATSComponent>(tsComp: ATSComponent, targetCompType: (new (unityGo : UnityEngine.GameObject, enableUpdate : boolean) => TSComp)): TSComp {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return null;
        }

        let comps = TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents;
        for (const iterator of comps) {
            if (iterator instanceof targetCompType) {
                return iterator;
            }
        }

        return null;
    }

    //TODO optimization
    public static GetTSComponetInChildren<TSComp extends ATSComponent>(tsComp: ATSComponent, targetCompType: (new (unityGo : UnityEngine.GameObject, enableUpdate : boolean) => TSComp)): TSComp {
        const res = TSComponentHub.GetTSComponet(tsComp, targetCompType);
        if (res != null) {
            return res;
        }

        for (const [k,v] of TSComponentHub._instance._tsComponents) {
            if (v.gameObject.transform.IsChildOf(tsComp.gameObject.transform)) {
                for (const iterator of v.tsComponents) {
                    if (iterator instanceof targetCompType) {
                        return iterator;
                    }
                }
            }
        }

        return null;
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

        
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents) {
            if (TSComponentHub._instance._firstOnEnableComponents.has(tsComp) == false) {
                tsComp.OnEnable();
            }
        }
    }

    private OnGameObjectDisable(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDisable();
        }
    }

    private OnGameObjectDestroy(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDestroy();
        }
        
        TSComponentHub._instance._tsComponents.delete(unityGoID)
    }

    private FirstOnEnableTSComponents(): void {
        for (const iterator of TSComponentHub._instance._firstOnEnableComponents) {
            iterator.OnEnable();
        }

        TSComponentHub._instance._firstOnEnableComponents.clear();
    }

    private FirstStartTSComponents(): void {
       for (const iterator of TSComponentHub._instance._firstStartComponents) {
            iterator.Start();
        }
        
        TSComponentHub._instance._firstStartComponents.clear();
    }
    
    private UpdateTSComponents(): void {
       for (const tsComps of TSComponentHub._instance._tsComponents.values()) {
           if (tsComps.tsComponents.size == 0) {
               continue;
           }
           
           for (const tsComp of tsComps.tsComponents) {
               if (tsComp.enableUpdate && tsComp.gameObject.activeInHierarchy) {
                   tsComp.Update();
               }
           }
       } 
    }
}