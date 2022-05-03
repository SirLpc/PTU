"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFrame = void 0;
const csharp_1 = require("csharp");
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
class UIFrame extends TSComponentHub_1.ATSComponent {
    _uiSetting;
    _uiFrameGo;
    static Create(uiSetting) {
        let instanceGo = csharp_1.UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value);
        let instance = new UIFrame(instanceGo, true);
        instance._uiSetting = uiSetting;
        return instance;
    }
}
exports.UIFrame = UIFrame;
//# sourceMappingURL=UIFrame.js.map