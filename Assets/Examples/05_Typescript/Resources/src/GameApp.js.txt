"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const AApp_1 = require("./CoreFramework/AApp");
const VariableTool_1 = require("./CoreFramework/VariableTool");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const SampleScreenBind_1 = require("./Sample/ScreenControllers/SampleScreenBind");
class GameApp extends AApp_1.AApp {
    uiFrame;
    constructor(compHub) {
        super(compHub);
        //let tstcomp = new TestTSComponent(uiFrame.gameObject);
        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);
        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);
    }
    Start() {
        this.uiFrame = UIFrame_1.UIFrame.Create(new UISetting_1.UISetting(new SampleScreenBind_1.SampleScreenBind()));
        this.uiFrame.OpenWindow("StartGameWindow");
        let StartDemoSignal = VariableTool_1.VariableTool.GetEvent("UITest/Signals/StartDemoSignal");
        StartDemoSignal.Register(this.OnStartDemo.bind(this));
    }
    OnStartDemo() {
        this.uiFrame.ShowPanel("NavigationPanel");
    }
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map