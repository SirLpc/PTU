"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISetting = void 0;
const VariableTool_1 = require("../../CoreFramework/VariableTool");
class UISetting {
    location = "UITest/";
    uiFrameTemplate;
    constructor(location = null) {
        if (location != null) {
            this.location = location;
        }
        this.uiFrameTemplate = VariableTool_1.VariableTool.Get(this.location + "uiFrameTemplate");
    }
}
exports.UISetting = UISetting;
//# sourceMappingURL=UISetting.js.map