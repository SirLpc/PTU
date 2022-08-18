"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const App_1 = require("./CoreFramework/App");
const VariableTool_1 = require("./CoreFramework/VariableTool");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const SampleScreenBind_1 = require("./Sample/ScreenControllers/SampleScreenBind");
class GameApp extends App_1.App {
    uiFrame;
    _cube;
    _tsBehaviourRunner;
    constructor(compHub, behaivourRunner, cube) {
        super(compHub, behaivourRunner);
        this._cube = cube;
        //let tstcomp = new TestTSComponent(uiFrame.gameObject);
        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);
        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);
    }
    Start() {
        //this.AttachActor(this._cube);
        return;
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