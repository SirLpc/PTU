"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTool = void 0;
const csharp_1 = require("csharp");
class EventTool {
    static Get(path) {
        return csharp_1.UnityEngine.Resources.Load(path);
    }
}
exports.EventTool = EventTool;
//# sourceMappingURL=EventTool.js.map