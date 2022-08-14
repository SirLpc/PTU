"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSActor = void 0;
const TSBehaviour_1 = require("./TSBehaviour");
class TSActor extends TSBehaviour_1.TSBehaviour {
    scene;
    parent;
    _components = [];
    _children = [];
    constructor(scene) {
        super();
        this.scene = scene;
        this.scene.AttachActor(this);
    }
    Awake() {
        this._components.forEach(element => {
            element.Awake();
        });
        this._children.forEach(element => {
            element.Awake();
        });
    }
    ;
    OnEnable() {
        this._components.forEach(element => {
            element.OnEnable();
        });
        this._children.forEach(element => {
            element.OnEnable();
        });
    }
    ;
    Start() {
        this._components.forEach(element => {
            element.Start();
        });
        this._children.forEach(element => {
            element.Start();
        });
    }
    ;
    Update() {
        this._components.forEach(element => {
            element.Update();
        });
        this._children.forEach(element => {
            element.Update();
        });
    }
    ;
    LateUpdate() {
        this._components.forEach(element => {
            element.LateUpdate();
        });
        this._children.forEach(element => {
            element.LateUpdate();
        });
    }
    ;
    OnDisable() {
        this._components.forEach(element => {
            element.OnDisable();
        });
        this._children.forEach(element => {
            element.OnDisable();
        });
    }
    ;
    OnDestroy() {
        this._components.forEach(element => {
            element.OnDestroy();
        });
        this._children.forEach(element => {
            element.OnDestroy();
        });
    }
    ;
    AddComponent(tsComp) {
        if (this._components.includes(tsComp)) {
            return false;
        }
        this._components.push(tsComp);
        return true;
    }
    AddChild(tsActor) {
        if (this._children.includes(tsActor)) {
            return false;
        }
        this._children.push(tsActor);
        tsActor.parent = this;
        return true;
    }
    RemoveChild(tsActor) {
        let index = this._children.indexOf(tsActor);
        if (index == -1) {
            return true;
        }
        this._children.slice(index, index);
        tsActor.SetParent(null);
        return true;
    }
    SetParent(tsActor) {
        this.parent = tsActor;
        return true;
    }
}
exports.TSActor = TSActor;
//# sourceMappingURL=TSActor.js.map