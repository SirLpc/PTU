"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeGO = void 0;
const TSActor_1 = require("./CoreFramework/TSActor");
class CubeGO extends TSActor_1.TSActor {
    _logger;
    constructor(logger) {
        super();
        this._logger = logger;
    }
    Awake() {
        this._logger.Log("Cube awake!");
    }
    OnEnable() {
        this._logger.Log("Cube OnEnable");
    }
    Start() {
        this._logger.Log("cube start");
    }
    Update() {
        this._logger.Log("cube update");
    }
    OnDisable() {
        this._logger.Log("cube ondisabe");
    }
    OnDestroy() {
        this._logger.Log("cube destroyed");
    }
}
exports.CubeGO = CubeGO;
//# sourceMappingURL=CubeGO.js.map