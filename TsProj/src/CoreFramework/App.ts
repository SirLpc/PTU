import { Logger as Logger } from "./Logger";
import { DIC } from "./DIC";
import { TSComponentHub } from "./TSComponentHub";
import { TSScene } from "./TSScene";
import { TSActor } from "./TSActor";

export abstract class App {

    private static _appInstance : App = null;

    private _compHub : TSComponentHub = null;
    private _behaviourRunner: TSScene;


    constructor(compHub: TSComponentHub, behaivourRunner: TSScene,) {
        App._appInstance = this;
        this._compHub = compHub;
        this._behaviourRunner = behaivourRunner;

        setInterval(()=>
        {
            this.Update();
        }, 1000 / 60);
    }

    public static get logger(): Logger {
        return DIC.Make<Logger>(Logger);
    }

    public static get compHub(): TSComponentHub {
        return App._appInstance._compHub;
    }

    public abstract Start():void;

    protected Update(): void {
        this._compHub.Tick();
        this._behaviourRunner.Update();
    }

    public AttachActor(tsActor: TSActor): void {
        this._behaviourRunner.AddChild(tsActor);
    }

    public DetachActor(tsActor: TSActor): void {
    }

}