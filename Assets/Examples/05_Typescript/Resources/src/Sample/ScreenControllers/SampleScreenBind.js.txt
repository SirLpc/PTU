"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleScreenBind = void 0;
const UISetting_1 = require("../../UIFramework/Configs/UISetting");
const StartWindowController_1 = require("./StartWindowController");
class SampleScreenBind extends UISetting_1.AScreenTSComponentBind {
    _binds = new Map([
        ["./TestTSComponent", StartWindowController_1.StartWindowController],
    ]);
    get binds() {
        return this._binds;
    }
}
exports.SampleScreenBind = SampleScreenBind;
//# sourceMappingURL=SampleScreenBind.js.map