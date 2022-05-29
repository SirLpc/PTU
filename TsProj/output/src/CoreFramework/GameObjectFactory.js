"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObjectFactory = void 0;
const csharp_1 = require("csharp");
const TSHelpers_1 = require("./TSHelpers");
class GameObjectFactory {
    nullGameObject = new csharp_1.UnityEngine.GameObject("NullGameObject");
    _loader = null;
    constructor(loader) {
        this._loader = loader;
    }
    GetInstance(address) {
        let ast = this._loader.Load(address);
        let prefab = TSHelpers_1.TSHelpers.Cast(ast, csharp_1.UnityEngine.GameObject);
        if (prefab.IsNotNull()) {
            return csharp_1.UnityEngine.Object.Instantiate(prefab);
        }
        return this.nullGameObject;
    }
}
exports.GameObjectFactory = GameObjectFactory;
//# sourceMappingURL=GameObjectFactory.js.map