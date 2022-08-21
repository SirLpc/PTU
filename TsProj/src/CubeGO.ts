import { UnityEngine } from "csharp";
import { Logger } from "./CoreFramework/Logger";
import { TSActor } from "./CoreFramework/TSActor";
import { TSScene } from "./CoreFramework/TSScene";
import { UnityGameObjectComponent } from "./CoreFramework/UnityGameObjectComponent";

export class CubeGO extends TSActor {

    private _logger : Logger;
    private _goComp : UnityGameObjectComponent;

    constructor(goComp: UnityGameObjectComponent, logger: Logger) {
        super();
        this._logger = logger;
        this._goComp = goComp;
    }

    public override Awake(): void {
        this._logger.Log("Cube awake!");
    }
    
    public override OnEnable(): void {
        this._logger.Log("Cube OnEnable");
        this._goComp.SetActive(true);
    }

    public override Start(): void {
        this._logger.Log("cube start");
    }

    public override Update(): void {
        this._logger.Log("cube update");

        if (UnityEngine.Input.GetKeyDown("d"))
        {
            this.enabled = false;
        }
    }

    public override OnDisable(): void {
        this._logger.Log("cube ondisabe");
        this._goComp.SetActive(false);
    }

    public override OnDestroy(): void {
        this._logger.Log("cube destroyed");
    }
}