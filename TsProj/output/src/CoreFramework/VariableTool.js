"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableTool = void 0;
const csharp_1 = require("csharp");
class VariableTool {
    static Get(path) {
        return csharp_1.UnityEngine.Resources.Load(path);
    }
    static GetCollection(path) {
        return csharp_1.UnityEngine.Resources.Load(path);
    }
    static GetEventT(path) {
        return csharp_1.UnityEngine.Resources.Load(path);
    }
    static GetEvent(path) {
        return csharp_1.UnityEngine.Resources.Load(path);
    }
}
exports.VariableTool = VariableTool;
//# sourceMappingURL=VariableTool.js.map