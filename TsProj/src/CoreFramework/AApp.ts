import { ALogger as ALogger } from "./ALogger";
import { DIC } from "./DIC";
import { TSComponentHub } from "./TSComponentHub";

export abstract class AApp {

    private static _appInstance : AApp = null;

    private _compHub : TSComponentHub = null;


    constructor(compHub: TSComponentHub) {
        AApp._appInstance = this;
        this._compHub = compHub;

        setInterval(()=>
        {
            this.Update();
        }, 1 / 60);
    }

    public static get logger(): ALogger {
        return DIC.Make<ALogger>(ALogger);
    }

    public static get compHub(): TSComponentHub {
        return AApp._appInstance._compHub;
    }

    public abstract Start():void;

    private Update(): void {
        this._compHub.Tick();
    }

}