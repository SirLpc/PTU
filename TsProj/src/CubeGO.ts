import { Logger } from "./CoreFramework/Logger";
import { TSActor } from "./CoreFramework/TSActor";
import { TSScene } from "./CoreFramework/TSScene";

export class CubeGO extends TSActor {

    private _logger : Logger;

    constructor(scene: TSScene, logger: Logger) {
        super(scene);
        this._logger = logger;
    }

    public override Awake(): void {
        this._logger.Log("Cube awake!");
    }
    
    public override OnEnable(): void {
        this._logger.Log("Cube OnEnable");
    }

    public override Start(): void {
        this._logger.Log("cube start");
    }

    public override Update(): void {
        this._logger.Log("cube update");
    }

    public override OnDisable(): void {
        this._logger.Log("cube ondisabe");
    }

    public override OnDestroy(): void {
        this._logger.Log("cube destroyed");
    }
}