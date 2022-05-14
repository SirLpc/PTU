"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityDebugLogger = void 0;
const csharp_1 = require("csharp");
class UnityDebugLogger {
    Log(message) {
        csharp_1.UnityEngine.Debug.Log(message);
    }
    LogWarning(message) {
        csharp_1.UnityEngine.Debug.LogWarning(message);
    }
    LogError(message) {
        csharp_1.UnityEngine.Debug.LogError(message);
    }
}
exports.UnityDebugLogger = UnityDebugLogger;
//# sourceMappingURL=UnityDebugLogger.js.map