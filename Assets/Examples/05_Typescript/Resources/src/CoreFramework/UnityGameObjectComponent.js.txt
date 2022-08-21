"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityGameObjectComponent = void 0;
const TSBehaviour_1 = require("./TSBehaviour");
class UnityGameObjectComponent extends TSBehaviour_1.TSBehaviour {
    _unityGo;
    constructor(unityGo) {
        super();
        this._unityGo = unityGo;
    }
    SetActive(enabled) {
        this._unityGo.SetActive(enabled);
    }
}
exports.UnityGameObjectComponent = UnityGameObjectComponent;
//# sourceMappingURL=UnityGameObjectComponent.js.map