"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObjectFactory = void 0;
const csharp_1 = require("csharp");
class GameObjectFactory {
    nullGameObject = new csharp_1.UnityEngine.GameObject("NullGameObject");
    _loader = null;
    constructor(loader) {
        this._loader = loader;
    }
    GetInstance(address) {
        let ast = this._loader.Load(address);
        if (ast instanceof csharp_1.UnityEngine.GameObject) {
            let prefab = ast;
            return csharp_1.UnityEngine.Object.Instantiate(prefab);
        }
        return this.nullGameObject;
    }
}
exports.GameObjectFactory = GameObjectFactory;
//# sourceMappingURL=GameObjectFactory.js.map