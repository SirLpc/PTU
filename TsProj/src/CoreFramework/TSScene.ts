import { TSActor } from "./TSActor";
import { TSBehaviour } from "./TSBehaviour";

class TSBehaviourState {
    public behaviour: TSBehaviour;
    public awaked: boolean;
    public started: boolean;
    public activated: boolean; 
    public destroyed: boolean;
    public isActor: boolean;

    public ResetBehaviour(behaviour: TSBehaviour, awaked: boolean): void {
        this.behaviour = behaviour;
        this.awaked = awaked;
        this.started = false;
        this.activated = false;
        this.destroyed = false;
        this.isActor = behaviour instanceof TSActor;
    }
}

export class TSScene extends TSActor {

    private _behaviourStetes : TSBehaviourState[] = [];

    public AttachActor(actor: TSActor) : boolean {
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

    public override Update(): void {
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