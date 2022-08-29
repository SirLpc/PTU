"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSScene = void 0;
const TSActor_1 = require("./TSActor");
class TSBehaviourState {
    behaviour;
    awaked;
    started;
    activated;
    destroyed;
    isActor;
    ResetBehaviour(behaviour, awaked) {
        this.behaviour = behaviour;
        this.awaked = awaked;
        this.started = false;
        this.activated = false;
        this.destroyed = false;
        this.isActor = behaviour instanceof TSActor_1.TSActor;
    }
}
class TSScene extends TSActor_1.TSActor {
    _behaviourStetes = [];
    AttachActor(actor) {
        var suc = this.AddChild(actor);
        if (suc) {
            let awaked = false;
            if (actor.enabled) {
                actor.Awake();
                awaked = true;
            }
            let state = new TSBehaviourState();
            state.ResetBehaviour(actor, awaked);
            this._behaviourStetes.push(state);
        }
        return suc;
    }
    Update() {
        // this._behaviourStetes.forEach(element => {
        //     if (element.behaviour.)
        // });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled && element.awaked == false) {
                element.behaviour.Awake();
                element.awaked = true;
            }
        });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled && element.activated == false) {
                element.behaviour.OnEnable();
                element.activated = true;
            }
        });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled && element.started == false) {
                element.behaviour.Start();
                element.started = true;
            }
        });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled) {
                element.behaviour.Update();
            }
        });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled) {
                element.behaviour.LateUpdate();
            }
        });
        this._behaviourStetes.forEach(element => {
            if (element.behaviour.enabled == false && element.activated) {
                element.behaviour.OnDisable();
                element.activated = false;
            }
        });
        for (let i = this._behaviourStetes.length - 1; i >= 0; i--) {
            const element = this._behaviourStetes[i];
            if (element.behaviour.destroyed && element.destroyed == false) {
                element.behaviour.OnDestroy();
                element.destroyed = true;
                //TODO recycle?
                this._behaviourStetes.slice(i, i + 1);
            }
        }
    }
}
exports.TSScene = TSScene;
//# sourceMappingURL=TSScene.js.map