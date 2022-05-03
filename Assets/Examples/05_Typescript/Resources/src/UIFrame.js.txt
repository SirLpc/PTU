"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const TSComponentHub_1 = require("./CoreFramework/TSComponentHub");
/// <reference path="PuergpTs.ts" />
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
})(PuergpTs || (PuergpTs = {}));
//# sourceMappingURL=UIFrame.js.map