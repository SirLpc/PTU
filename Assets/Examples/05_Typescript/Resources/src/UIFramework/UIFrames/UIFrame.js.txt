"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuergpTs = void 0;
const csharp_1 = require("csharp");
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
var PuergpTs;
(function (PuergpTs) {
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
    PuergpTs.UIFrame = UIFrame;
})(PuergpTs = exports.PuergpTs || (exports.PuergpTs = {}));
//# sourceMappingURL=UIFrame.js.map