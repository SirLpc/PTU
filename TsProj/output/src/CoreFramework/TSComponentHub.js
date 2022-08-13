"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSComponentHub = exports.ATSComponent = void 0;
const csharp_1 = require("csharp");
const EventTool_1 = require("./EventTool");
const puerts_1 = require("puerts");
const AApp_1 = require("./AApp");
class ATSComponent {
    gameObject;
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
    constructor(unityGo) {
        this.gameObject = unityGo;
        this.binder = unityGo.GetComponent((0, puerts_1.$typeof)(csharp_1.Js.JsBinding));
    }
    ;
    GetTSComponet(targetCompType) {
        return AApp_1.AApp.compHub.GetTSComponet(this, targetCompType);
    }
    GetTSComponetInChildren(targetCompType) {
        return AApp_1.AApp.compHub.GetTSComponetInChildren(this, targetCompType);
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
    _gameObjectOnEnableEvent;
    _gameObjectOnDisableEvent;
    _gameObjectOnDestroyEvent;
    _tsComponents = new Map();
    _firstOnEnableComponents = new Set();
    _firstStartComponents = new Set();
    Tick() {
        this.FirstOnEnableTSComponents();
        this.FirstStartTSComponents();
        this.UpdateTSComponents();
    }
    AddComponent(gameObject, targetCompType) {
        const tsComp = new targetCompType(gameObject);
        this.Register(tsComp);
        tsComp.Awake();
        return tsComp;
    }
    Register(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            const entry = new TSComponentEntry(unityGoID, tsComp.gameObject, new Set());
            this._tsComponents.set(unityGoID, entry);
        }
        this._firstOnEnableComponents.add(tsComp);
        this._firstStartComponents.add(tsComp);
        this._tsComponents.get(unityGoID).tsComponents.add(tsComp);
        tsComp.gameObject.GetOrAddComponent((0, puerts_1.$typeof)(csharp_1.Puergp.TSComponentEventHelper));
    }
    Unregister(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }
        this._tsComponents.get(unityGoID).tsComponents.delete(tsComp);
        tsComp.gameObject = null;
    }
    GetTSComponet(tsComp, targetCompType) {
        let unityGoID = 0;
        if (tsComp instanceof ATSComponent) {
            unityGoID = tsComp.gameObject.GetInstanceID();
        }
        else {
            unityGoID = tsComp.GetInstanceID();
        }
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
    GetTSComponetInChildren(tsComp, targetCompType) {
        const res = this.GetTSComponet(tsComp, targetCompType);
        if (res != null) {
            return res;
        }
        for (const [k, v] of this._tsComponents) {
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
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            if (this._firstOnEnableComponents.has(tsComp) == false) {
                tsComp.OnEnable();
            }
        }
    }
    OnGameObjectDisable(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDisable();
        }
    }
    OnGameObjectDestroy(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (this._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of this._tsComponents.get(unityGoID).tsComponents) {
            tsComp.OnDestroy();
        }
        this._tsComponents.delete(unityGoID);
    }
    FirstOnEnableTSComponents() {
        for (const iterator of this._firstOnEnableComponents) {
            iterator.OnEnable();
        }
        this._firstOnEnableComponents.clear();
    }
    FirstStartTSComponents() {
        for (const iterator of this._firstStartComponents) {
            iterator.Start();
        }
        this._firstStartComponents.clear();
    }
    UpdateTSComponents() {
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
exports.TSComponentHub = TSComponentHub;
//# sourceMappingURL=TSComponentHub.js.map