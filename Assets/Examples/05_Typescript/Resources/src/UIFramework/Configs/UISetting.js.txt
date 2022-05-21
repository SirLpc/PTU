"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISetting = void 0;
const VariableTool_1 = require("../../CoreFramework/VariableTool");
class UISetting {
    location = "UITest/";
    uiFrameTemplate;
    screensToRegister;
    deactivateScreenGOs;
    constructor(location = null) {
        if (location != null) {
            this.location = location;
        }
        this.uiFrameTemplate = VariableTool_1.VariableTool.Get(this.location + "uiFrameTemplate");
        this.screensToRegister = VariableTool_1.VariableTool.GetCollection(this.location + "screensToRegister");
        this.deactivateScreenGOs = VariableTool_1.VariableTool.Get(this.location + "deactivateScreenGOs");
    }
}
exports.UISetting = UISetting;
//# sourceMappingURL=UISetting.js.map