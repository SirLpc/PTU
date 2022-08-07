import { ILogger } from "./ILogger";
import { Locator } from "./Locator";
import { TSComponentHub } from "./TSComponentHub";

export abstract class App {

    private static _appInstance : App = null;

    private _compHub : TSComponentHub = null;

    constructor() {
        App._appInstance = this;
    }

    public static get logger(): ILogger {
        return Locator.get<ILogger>(ILogger);
    }

    public static get compHub(): TSComponentHub {
        if (App._appInstance._compHub != null)
        {
            return App._appInstance._compHub;
        }

        var hub = new TSComponentHub();
        setInterval(()=>
        {
            hub.Tick();
        }, 1 / 60);

        
        App._appInstance._compHub  = hub;
        return hub;
    }

}