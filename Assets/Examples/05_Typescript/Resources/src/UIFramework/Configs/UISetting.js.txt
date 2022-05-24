"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISetting = exports.AScreenTSComponentBind = void 0;
const VariableTool_1 = require("../../CoreFramework/VariableTool");
class AScreenTSComponentBind {
}
exports.AScreenTSComponentBind = AScreenTSComponentBind;
class UISetting {
    location = "UITest/";
    uiFrameTemplate;
    screensToRegister;
    deactivateScreenGOs;
    binds;
    constructor(binds, location = null) {
        if (location != null) {
            this.location = location;
        }
        this.binds = binds;
        this.uiFrameTemplate = VariableTool_1.VariableTool.Get(this.location + "uiFrameTemplate");
        this.screensToRegister = VariableTool_1.VariableTool.GetCollection(this.location + "screensToRegister");
        this.deactivateScreenGOs = VariableTool_1.VariableTool.Get(this.location + "deactivateScreenGOs");
    }
}
exports.UISetting = UISetting;
//# sourceMappingURL=UISetting.js.map