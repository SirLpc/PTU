"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const csharp_1 = require("csharp");
const App_1 = require("./CoreFramework/App");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const UnityDebugLogger_1 = require("./UnityDebugLogger");
const puerts_1 = require("puerts");
const DynamicClass_1 = require("./CoreFramework/DynamicClass");
class GameApp extends App_1.App {
    constructor() {
        super();
        let uiFrame = UIFrame_1.UIFrame.Create(new UISetting_1.UISetting());
        //uiFrame.OpenWindow("StartGameWindow");
        App_1.App.logger.Log(uiFrame.gameObject.name);
        let tsCompBinder = uiFrame.gameObject.GetComponent((0, puerts_1.$typeof)(csharp_1.Puergp.TSComponentBinder));
        App_1.App.logger.Log(tsCompBinder.tsTComponentType);
        let plugin = DynamicClass_1.DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);
    }
    logger = new UnityDebugLogger_1.UnityDebugLogger();
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map