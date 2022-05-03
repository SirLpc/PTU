"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSComponentHub = exports.TSComponent = void 0;
const csharp_1 = require("csharp");
const EventTool_1 = require("./EventTool");
const puerts_1 = require("puerts");
class TSComponent {
    gameObject;
    OnEnable() { }
    ;
    Update() { }
    ;
    OnDisable() { }
    ;
    OnDestroy() { }
    ;
}
exports.TSComponent = TSComponent;
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
    static Bind(unityGo, tsComp) {
        const unityGoID = unityGo.GetInstanceID();
        if (TSComponentHub._instance._tsComponents.has(unityGoID) == false) {
            TSComponentHub._instance._tsComponents.set(unityGoID, new Set());
        }
        TSComponentHub._instance._tsComponents.get(unityGoID).add(tsComp);
        tsComp.gameObject = unityGo;
        unityGo.GetOrAddComponent((0, puerts_1.$typeof)(csharp_1.Puergp.TSComponentEventHelper));
    }
    static UnBind(unityGo, tsComp) {
        const unityGoID = unityGo.GetInstanceID();
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