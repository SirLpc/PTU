"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const App_1 = require("./CoreFramework/App");
const UnityDebugLogger_1 = require("./UnityDebugLogger");
class GameApp extends App_1.App {
    constructor() {
        // let uiFrame = UIFrame.Create(new UISetting());
        super();
    }
    logger = new UnityDebugLogger_1.UnityDebugLogger();
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map