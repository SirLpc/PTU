"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFrame = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
const App_1 = require("../../CoreFramework/App");
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
const PanelUILayer_1 = require("../Panel/PanelUILayer");
const WindowUILayer_1 = require("../Window/WindowUILayer");
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
    }
    OnEnable() {
        App_1.App.logger.LogError("onenable)");
        // let tst: TestTSComponent = new TestTSComponent(this.gameObject, false);
        // let getComp :TestTSComponent = this.GetTSComponet(TestTSComponent);
        // App.logger.Log("ddddddddddddd-------------------");
        // App.logger.Log(this.gameObject.name);
        // App.logger.Log(getComp.gameObject.name);
    }
    Initialize() {
        if (this.panelLayer == null) {
            this.panelLayer = this.GetTSComponetInChildren(PanelUILayer_1.PanelUILayer);
            if (this.panelLayer == null) {
                App_1.App.logger.LogError("[UI Frame] UI Frame lacks Panel Layer!");
            }
            else {
                this.panelLayer.Initialize();
            }
        }
        if (this.windowLayer == null) {
            this.windowLayer = this.GetTSComponetInChildren(WindowUILayer_1.WindowUILayer);
            if (this.windowLayer == null) {
                App_1.App.logger.LogError("[UI Frame] UI Frame lacks Window Layer!");
            }
            else {
                this.windowLayer.Initialize();
                this.windowLayer.requestScreenBlock.Register(this.OnRequestScreenBlock.bind(this));
                this.windowLayer.requestScreenUnblock.Register(this.OnRequestScreenUnblock.bind(this));
            }
        }
        this.graphicRaycaster = this.mainCanvas.GetComponent((0, puerts_1.$typeof)(csharp_1.UnityEngine.UI.GraphicRaycaster));
    }
    ShowPanel(screenId, properties) {
        if (properties === undefined) {
            this.panelLayer.ShowScreenById(screenId);
        }
        else {
            this.panelLayer.ShowScreenById(screenId, properties);
        }
    }
    HidePanel(screenId) {
        this.panelLayer.HideScreenById(screenId);
    }
    OpenWindow(screenId, properties) {
        if (properties === undefined) {
            this.windowLayer.ShowScreenById(screenId);
        }
        else {
            this.windowLayer.ShowScreenById(screenId, properties);
        }
    }
    CloseWindow(screenId) {
        this.windowLayer.HideScreenById(screenId);
    }
    CloseCurrentWindow() {
        if (this.windowLayer.currentWindow != null) {
            this.CloseWindow(this.windowLayer.currentWindow.screenId);
        }
    }
    ShowScreen(screenId) {
        if (this.IsWindowRegistered(screenId)) {
            this.OpenWindow(screenId);
            return;
        }
        if (this.IsPanelRegistered(screenId)) {
            this.ShowPanel(screenId);
            return;
        }
        App_1.App.logger.LogError("Tried to open Screen id " + screenId + " but it's not registered as Window or Panel!");
    }
    RegisterScreen(screenId, controller, screenTransform) {
        let window = controller;
        if (window != null) {
            this.windowLayer.RegisterScreen(screenId, window);
            if (screenTransform.IsNotNull()) {
                this.windowLayer.ReparentScreen(controller, screenTransform);
            }
            return;
        }
        let panel = controller;
        if (panel != null) {
            this.panelLayer.RegisterScreen(screenId, panel);
            if (screenTransform.IsNotNull()) {
                this.panelLayer.ReparentScreen(controller, screenTransform);
            }
        }
    }
    RegisterPanel(screenId, controller) {
        this.panelLayer.RegisterScreen(screenId, controller);
    }
    UnregisterPanel(screenId, controller) {
        this.panelLayer.RegisterScreen(screenId, controller);
    }
    RegisterWindow(screenId, controller) {
        this.windowLayer.RegisterScreen(screenId, controller);
    }
    UnregisterWindow(screenId, controller) {
        this.windowLayer.RegisterScreen(screenId, controller);
    }
    IsPanelOpen(panelId) {
        return this.panelLayer.IsPanelVisition(panelId);
    }
    HideAll(animate = true) {
        this.CloseAllWindows(animate);
        this.HideAllPanels(animate);
    }
    HideAllPanels(animate = true) {
        this.panelLayer.HideAll(animate);
    }
    CloseAllWindows(animate = true) {
        this.windowLayer.HideAll(animate);
    }
    IsScreenRegistered(screenId) {
        if (this.IsWindowRegistered(screenId)) {
            return true;
        }
        if (this.IsPanelRegistered(screenId)) {
            return true;
        }
        return false;
    }
    IsWindowRegistered(screenId) {
        if (this.windowLayer.IsScreenRegistered(screenId)) {
            return true;
        }
    }
    IsPanelRegistered(screenId) {
        if (this.panelLayer.IsScreenRegistered(screenId)) {
            return true;
        }
    }
    OnRequestScreenBlock() {
        if (this.graphicRaycaster.IsNotNull()) {
            this.graphicRaycaster.enabled = false;
        }
    }
    OnRequestScreenUnblock() {
        if (this.graphicRaycaster.IsNotNull()) {
            this.graphicRaycaster.enabled = true;
        }
    }
}
exports.UIFrame = UIFrame;
//# sourceMappingURL=UIFrame.js.map