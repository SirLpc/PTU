"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFrame = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
const App_1 = require("../../CoreFramework/App");
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
class UIFrame extends TSComponentHub_1.ATSComponent {
    _uiSetting;
    _uiFrameGo;
    panelLayer;
    windowLayer;
    mainCanvas;
    graphicRaycaster;
    get uiCamera() {
        return this.mainCanvas.worldCamera;
    }
    static Create(uiSetting) {
        let instanceGo = csharp_1.UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value);
        let instance = new UIFrame(instanceGo, true);
        instance._uiSetting = uiSetting;
        instance.Initialize();
        return instance;
    }
    Awake() {
        this.mainCanvas = this.gameObject.GetComponent((0, puerts_1.$typeof)(csharp_1.UnityEngine.Canvas));
        App_1.App.logger.LogError("dd");
    }
    OnEnable() {
        App_1.App.logger.LogError("onenable)");
    }
    Initialize() {
        if (this.panelLayer == null) {
            //this.panelLayer = this.gameObject.GetComponentInChildren($typeof(Uni))
        }
    }
    Update() {
        App_1.App.logger.Log("bbL");
    }
}
exports.UIFrame = UIFrame;
//# sourceMappingURL=UIFrame.js.map