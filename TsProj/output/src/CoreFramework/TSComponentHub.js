"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSComponentHub = exports.ATSComponent = void 0;
const csharp_1 = require("csharp");
const EventTool_1 = require("./EventTool");
const puerts_1 = require("puerts");
class ATSComponent {
    gameObject;
    enableUpdate;
    binder;
    Awake() { }
    ;
    OnEnable() { }
    ;
    Start() { }
    ;
    Update() { }
    ;
    OnDisable() { }
    ;
    OnDestroy() { }
    ;
    constructor(unityGo, enableUpdate) {
        this.gameObject = unityGo;
        this.enableUpdate = enableUpdate;
        this.binder = unityGo.GetComponent((0, puerts_1.$typeof)(csharp_1.Js.JsBinding));
        TSComponentHub.Register(this);
        this.Awake();
    }
    ;
    GetTSComponet(targetCompType) {
        return TSComponentHub.GetTSComponet(this, targetCompType);
    }
    GetTSComponetInChildren(targetCompType) {
        return TSComponentHub.GetTSComponetInChildren(this, targetCompType);
    }
}
exports.ATSComponent = ATSComponent;
class TSComponentEntry {
    instanceID;
    gameObject;
    tsComponents;
    constructor(instanceID, gameObject, tsComponents) {
        this.instanceID = instanceID;
        this.gameObject = gameObject;
        this.tsComponents = tsComponents;
    }
}
class TSComponentHub {
    static _instance;
    _gameObjectOnEnableEvent;
    _gameObjectOnDisableEvent;
    _gameObjectOnDestroyEvent;
    _tsComponents = new Map();
    _firstOnEnableComponents = new Set();
    _firstStartComponents = new Set();
    //public static get registeredTSComponents(): 
    static Init() {
        TSComponentHub._instance = new TSComponentHub();
    }
    static Tick() {
        TSComponentHub._instance.FirstOnEnableTSComponents();
        TSComponentHub._instance.FirstStartTSComponents();
        TSComponentHub._instance.UpdateTSComponents();
    }
    static Register(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            const entry = new TSComponentEntry(unityGoID, tsComp.gameObject, new Set());
            TSComponentHub._instance._tsComponents.set(unityGoID, entry);
        }
        TSComponentHub._instance._firstOnEnableComponents.add(tsComp);
        TSComponentHub._instance._firstStartComponents.add(tsComp);
        TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents.add(tsComp);
        tsComp.gameObject.GetOrAddComponent((0, puerts_1.$typeof)(csharp_1.Puergp.TSComponentEventHelper));
    }
    static Unregister(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents.delete(tsComp);
        tsComp.gameObject = null;
    }
    static GetTSComponet(tsComp, targetCompType) {
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
    static GetTSComponetInChildren(tsComp, targetCompType) {
        const res = TSComponentHub.GetTSComponet(tsComp, targetCompType);
        if (res != null) {
            return res;
        }
        for (const [k, v] of TSComponentHub._instance._tsComponents) {
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
        this.SetupEvents();
    }
    SetupEvents() {
        this._gameObjectOnEnableEvent = EventTool_1.EventTool.Get("BuiltIn/GameObjectOnEnableEvent");
        this._gameObjectOnDisableEvent = EventTool_1.EventTool.Get("BuiltIn/GameObjectOnDisableEvent");
        this._gameObjectOnDestroyEvent = EventTool_1.EventTool.Get("BuiltIn/GameObjectOnDestroyEvent");
        this._gameObjectOnEnableEvent.Register(this.OnGameObjectEnable.bind(this));
        this._gameObjectOnDisableEvent.Register(this.OnGameObjectDisable.bind(this));
        this._gameObjectOnDestroyEvent.Register(this.OnGameObjectDestroy.bind(this));
    }
    OnGameObjectEnable(unityGo) {
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
    OnGameObjectDisable(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDisable();
        }
    }
    OnGameObjectDestroy(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDestroy();
        }
        TSComponentHub._instance._tsComponents.delete(unityGoID);
    }
    FirstOnEnableTSComponents() {
        for (const iterator of TSComponentHub._instance._firstOnEnableComponents) {
            iterator.OnEnable();
        }
        TSComponentHub._instance._firstOnEnableComponents.clear();
    }
    FirstStartTSComponents() {
        for (const iterator of TSComponentHub._instance._firstStartComponents) {
            iterator.Start();
        }
        TSComponentHub._instance._firstStartComponents.clear();
    }
    UpdateTSComponents() {
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
exports.TSComponentHub = TSComponentHub;
//# sourceMappingURL=TSComponentHub.js.map