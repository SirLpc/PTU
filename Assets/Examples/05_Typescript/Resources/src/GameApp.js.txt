"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const UIFrame_1 = require("./UIFramework/UIFrames/UIFrame");
const UISetting_1 = require("./UIFramework/Configs/UISetting");
class GameApp {
    constructor() {
        let uiFrame = UIFrame_1.UIFrame.Create(new UISetting_1.UISetting());
    }
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map