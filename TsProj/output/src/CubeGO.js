"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeGO = void 0;
const csharp_1 = require("csharp");
const TSActor_1 = require("./CoreFramework/TSActor");
class CubeGO extends TSActor_1.TSActor {
    _logger;
    _goComp;
    constructor(goComp, logger) {
        super();
        this._logger = logger;
        this._goComp = goComp;
    }
    Awake() {
        this._logger.Log("Cube awake!");
    }
    OnEnable() {
        this._logger.Log("Cube OnEnable");
        this._goComp.SetActive(true);
    }
    Start() {
        this._logger.Log("cube start");
    }
    Update() {
        this._logger.Log("cube update");
        if (csharp_1.UnityEngine.Input.GetKeyDown("d")) {
            this.enabled = false;
        }
    }
    OnDisable() {
        this._logger.Log("cube ondisabe");
        this._goComp.SetActive(false);
    }
    OnDestroy() {
        this._logger.Log("cube destroyed");
    }
}
exports.CubeGO = CubeGO;
//# sourceMappingURL=CubeGO.js.map