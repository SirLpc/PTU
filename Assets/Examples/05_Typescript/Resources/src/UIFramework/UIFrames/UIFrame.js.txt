"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFrame = void 0;
const csharp_1 = require("csharp");
class UIFrame {
    _uiSetting;
    _go;
    Create(uiSetting) {
        this._uiSetting = uiSetting;
        this._go = csharp_1.UnityEngine.GameObject.Instantiate(this._uiSetting.uiFrameTemplate);
        return true;
    }
}
exports.UIFrame = UIFrame;
//# sourceMappingURL=UIFrame.js.map