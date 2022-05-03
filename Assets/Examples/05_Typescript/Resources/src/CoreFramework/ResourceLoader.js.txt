"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceLoader = void 0;
const csharp_1 = require("csharp");
class ResourceLoader {
    Load(address) {
        return csharp_1.UnityEngine.Resources.Load(address.address);
    }
}
exports.ResourceLoader = ResourceLoader;
//# sourceMappingURL=ResourceLoader.js.map