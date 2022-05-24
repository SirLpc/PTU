"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const App_1 = require("./CoreFramework/App");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const UnityDebugLogger_1 = require("./UnityDebugLogger");
const SampleScreenBind_1 = require("./Sample/ScreenControllers/SampleScreenBind");
class GameApp extends App_1.App {
    constructor() {
        super();
        let uiFrame = UIFrame_1.UIFrame.Create(new UISetting_1.UISetting(new SampleScreenBind_1.SampleScreenBind()));
        uiFrame.OpenWindow("StartGameWindow");
        //let tstcomp = new TestTSComponent(uiFrame.gameObject);
        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);
        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);
    }
    logger = new UnityDebugLogger_1.UnityDebugLogger();
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map