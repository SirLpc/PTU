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
        let prefab = this._loader.Load(address);
        if (prefab == null) {
            return this.nullGameObject;
        }
        return csharp_1.UnityEngine.Object.Instantiate(prefab);
    }
}
exports.GameObjectFactory = GameObjectFactory;
//# sourceMappingURL=GameObjectFactory.js.map