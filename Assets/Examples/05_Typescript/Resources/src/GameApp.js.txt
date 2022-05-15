"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const App_1 = require("./CoreFramework/App");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const UnityDebugLogger_1 = require("./UnityDebugLogger");
class GameApp extends App_1.App {
    constructor() {
        super();
        let uiFrame = UIFrame_1.UIFrame.Create(new UISetting_1.UISetting());
    }
    logger = new UnityDebugLogger_1.UnityDebugLogger();
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map