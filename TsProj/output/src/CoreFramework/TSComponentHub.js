"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSComponentHub = exports.ATSComponent = void 0;
const csharp_1 = require("csharp");
const EventTool_1 = require("./EventTool");
const puerts_1 = require("puerts");
class ATSComponent {
    constructor(unityGo, enableUpdate) {
        this.gameObject = unityGo;
        this.enableUpdate = enableUpdate;
        this.Awake();
    }
    ;
    gameObject;
    enableUpdate;
    Awake() { }
    ;
    OnEnable() { }
    ;
    Update() { }
    ;
    OnDisable() { }
    ;
    OnDestroy() { }
    ;
}
exports.ATSComponent = ATSComponent;
class TSComponentHub {
    static _instance;
    _gameObjectOnEnableEvent;
    _gameObjectOnDisableEvent;
    _gameObjectOnDestroyEvent;
    _tsComponents = new Map();
    static Init() {
        TSComponentHub._instance = new TSComponentHub();
    }
    static Tick() {
        TSComponentHub._instance.UpdateTSComponents();
    }
    static Register(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            TSComponentHub._instance._tsComponents.set(unityGoID, new Set());
        }
        TSComponentHub._instance._tsComponents.get(unityGoID).add(tsComp);
        tsComp.gameObject.GetOrAddComponent((0, puerts_1.$typeof)(csharp_1.PuergpCs.TSComponentEventHelper));
    }
    static Unregister(tsComp) {
        const unityGoID = tsComp.gameObject.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        TSComponentHub._instance._tsComponents.get(unityGoID).delete(tsComp);
        tsComp.gameObject = null;
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
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnEnable();
        }
    }
    OnGameObjectDisable(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnDisable();
        }
    }
    OnGameObjectDestroy(unityGo) {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            return;
        }
        for (const tsComp of TSComponentHub._instance._tsComponents.get(unityGoID)) {
            tsComp.OnDestroy();
        }
        TSComponentHub._instance._tsComponents.delete(unityGoID);
    }
    UpdateTSComponents() {
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
exports.TSComponentHub = TSComponentHub;
//# sourceMappingURL=TSComponentHub.js.map