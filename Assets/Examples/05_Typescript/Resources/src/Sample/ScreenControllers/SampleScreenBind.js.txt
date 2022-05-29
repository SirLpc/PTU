"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleScreenBind = void 0;
const UISetting_1 = require("../../UIFramework/Configs/UISetting");
const NavigationPanelController_1 = require("./NavigationPanelController");
const StartWindowController_1 = require("./StartWindowController");
class SampleScreenBind extends UISetting_1.AScreenTSComponentBind {
    _binds = new Map([
        ["StartGameWindow", StartWindowController_1.StartWindowController],
        ["NavigationPanel", NavigationPanelController_1.NavigationPanelController],
    ]);
    get binds() {
        return this._binds;
    }
}
exports.SampleScreenBind = SampleScreenBind;
//# sourceMappingURL=SampleScreenBind.js.map