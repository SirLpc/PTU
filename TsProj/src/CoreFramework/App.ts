import { ILogger } from "./ILogger";

export abstract class App {

    private static _appInstance : App = null;

    public abstract logger : ILogger;

    constructor() {
        App._appInstance = this;
    }

    public static get logger(): ILogger {
        return App._appInstance.logger;
    }


}