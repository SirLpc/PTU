import { UnityEngine } from "csharp";
import { TSScene as TSScene } from "./TSScene";
import { TSBehaviour } from "./TSBehaviour";
import { TSComponent } from "./TSComponent";

export abstract class TSActor extends TSBehaviour {

    public scene : TSScene;
    public parent : TSActor;

    private _components : TSBehaviour[] = [];
    private _children : TSBehaviour[] = [];

    public constructor(scene: TSScene) {
        super();

        this.scene = scene;
        this.scene.AttachActor(this);
    }

    public override Awake() : void {
        this._components.forEach(element => {
            element.Awake();
        });

        this._children.forEach(element => {
            element.Awake();
        });
    };
    public override OnEnable() : void {
        this._components.forEach(element => {
            element.OnEnable();
        });

        this._children.forEach(element => {
            element.OnEnable();
        });
    };
    public override Start() : void {
        this._components.forEach(element => {
            element.Start();
        });

        this._children.forEach(element => {
            element.Start();
        });
    };
    public override Update() : void {
        this._components.forEach(element => {
            element.Update();
        });

        this._children.forEach(element => {
            element.Update();
        });
    };
    public override LateUpdate() : void {
        this._components.forEach(element => {
            element.LateUpdate();
        });

        this._children.forEach(element => {
            element.LateUpdate();
        });
    };
    public override OnDisable() : void {
        this._components.forEach(element => {
            element.OnDisable();
        });

        this._children.forEach(element => {
            element.OnDisable();
        });
    };
    public override OnDestroy() : void {
        this._components.forEach(element => {
            element.OnDestroy();
        });

        this._children.forEach(element => {
            element.OnDestroy();
        });
    };

    public AddComponent(tsComp: TSComponent): boolean {
        if (this._components.includes(tsComp)) {
            return false;
        }

        this._components.push(tsComp);
        return true;
    }

    public AddChild(tsActor: TSActor): boolean {
        if (this._children.includes(tsActor)) {
            return false;
        }

        this._children.push(tsActor);
        tsActor.parent = this;
        return true;
    }

    public RemoveChild(tsActor: TSActor): boolean {
        let index = this._children.indexOf(tsActor);
        if (index == -1) {
            return true;
        }

        this._children.slice(index, index);
        tsActor.SetParent(null);
        return true;
    }

    public SetParent(tsActor: TSActor): boolean {
        this.parent = tsActor;
        return true;
    }

}