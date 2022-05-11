"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowUILayer = void 0;
const AUILayer_1 = require("../Core/AUILayer");
class WindowUILayer extends AUILayer_1.AUILayer {
    priorityParaLayer;
    currentWindow;
    windowQueue = [];
    windowHistory = [];
    requestScreenBlock;
    requestScreenUnlock;
    ShowScreen(screen, properties) {
        throw new Error("Method not implemented.");
    }
    HideScreen(screen) {
        throw new Error("Method not implemented.");
    }
}
exports.WindowUILayer = WindowUILayer;
//# sourceMappingURL=WindowUILayer.js.map