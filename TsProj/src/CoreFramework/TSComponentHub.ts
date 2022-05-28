import { Js, Puergp, UnityEngine } from "csharp";
import {EventTool} from "./EventTool";
import { $typeof } from "puerts";
import { App } from "./App";

export abstract class ATSComponent {
    public gameObject : UnityEngine.GameObject;
    public abstract enableUpdate : boolean;
    public binder : Js.JsBinding;
    public Awake() : void {};
    public OnEnable() : void {};
    public Start() : void {};
    public Update() : void {};
    public OnDisable() : void {};
    public OnDestroy() : void {};

    public constructor(unityGo : UnityEngine.GameObject) {
        this.gameObject = unityGo;
        this.binder = unityGo.GetComponent($typeof(Js.JsBinding)) as Js.JsBinding;
    };

    public GetTSComponet<TSComp extends ATSComponent>(targetCompType: (new (unityGo : UnityEngine.GameObject) => TSComp)): TSComp {
        return App.compHub.GetTSComponet(this, targetCompType);
    }

    public GetTSComponetInChildren<TSComp extends ATSComponent>(targetCompType: (new (unityGo : UnityEngine.GameObject) => TSComp)): TSComp {
        return App.compHub.GetTSComponetInChildren(this, targetCompType);
    }
}


class TSComponentEntry {
    constructor(public instanceID: number, public gameObject: UnityEngine.GameObject, public tsComponents: Set<ATSComponent>) 
    {}
}


export class TSComponentHub {
    private _gameObjectOnEnableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDisableEvent : Puergp.Events.GameObjectEvent;
    private _gameObjectOnDestroyEvent : Puergp.Events.GameObjectEvent;
    
    private _tsComponents : Map<number, TSComponentEntry> = new Map<number, TSComponentEntry>();
    private _firstOnEnableComponents : Set<ATSComponent> = new Set<ATSComponent>();
    private _firstStartComponents : Set<ATSComponent> = new Set<ATSComponent>();


    public Tick(): void {
        this.FirstOnEnableTSComponents();
        this.FirstStartTSComponents();
        this.UpdateTSComponents();
    }

    public AddComponent<TSComp extends ATSComponent>(
        gameObject : UnityEngine.GameObject, 
        targetCompType: (new (unityGo : UnityEngine.GameObject) => TSComp))
        : TSComp
    {
        const tsComp = new targetCompType(gameObject);
        this.Register(tsComp);
        tsComp.Awake();
        return tsComp;
    }
    
    public Register(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            const entry = new TSComponentEntry(unityGoID, tsComp.gameObject, new Set<ATSComponent>())
            this._tsComponents.set(unityGoID, entry);

        }
        
        this._firstOnEnableComponents.add(tsComp);
        this._firstStartComponents.add(tsComp);
        this._tsComponents.get(unityGoID).tsComponents.add(tsComp);

        tsComp.gameObject.GetOrAddComponent($typeof(Puergp.TSComponentEventHelper));
    }
    
    public Unregister(tsComp : ATSComponent): void {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }

        this._tsComponents.get(unityGoID).tsComponents.delete(tsComp);
        tsComp.gameObject = null;
    }

    public GetTSComponet<TSComp extends ATSComponent>(tsComp: ATSComponent, targetCompType: (new (unityGo : UnityEngine.GameObject) => TSComp)): TSComp {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return null;
        }

        let comps = this._tsComponents.get(unityGoID).tsComponents;
        for (const iterator of comps) {
            if (iterator instanceof targetCompType) {
                return iterator;
            }
        }

        return null;
    }

    //TODO optimization
    public GetTSComponetInChildren<TSComp extends ATSComponent>(tsComp: ATSComponent, targetCompType: (new (unityGo : UnityEngine.GameObject) => TSComp)): TSComp {
        const res = this.GetTSComponet(tsComp, targetCompType);
        if (res != null) {
            return res;
        }

        for (const [k,v] of this._tsComponents) {
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
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }

        
        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            if (this._firstOnEnableComponents.has(tsComp) == false) {
                tsComp.OnEnable();
            }
        }
    }

    private OnGameObjectDisable(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDisable();
        }
    }

    private OnGameObjectDestroy(unityGo: UnityEngine.GameObject): void {
        const unityGoID = unityGo.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }

        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDestroy();
        }
        
        this._tsComponents.delete(unityGoID)
    }

    private FirstOnEnableTSComponents(): void {
        for (const iterator of this._firstOnEnableComponents) {
            iterator.OnEnable();
        }

        this._firstOnEnableComponents.clear();
    }

    private FirstStartTSComponents(): void {
       for (const iterator of this._firstStartComponents) {
            iterator.Start();
        }
        
        this._firstStartComponents.clear();
    }
    
    private UpdateTSComponents(): void {
       for (const tsComps of this._tsComponents.values()) {
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