"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIFrame = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
const App_1 = require("../../CoreFramework/App");
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
const TSHelpers_1 = require("../../CoreFramework/TSHelpers");
const AUIScreenController_1 = require("../Core/AUIScreenController");
const APanelController_1 = require("../Panel/APanelController");
const PanelUILayer_1 = require("../Panel/PanelUILayer");
const AWindowController_1 = require("../Window/AWindowController");
const WindowUILayer_1 = require("../Window/WindowUILayer");
class UIFrame extends TSComponentHub_1.ATSComponent {
    enableUpdate = false;
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
        const instanceGo = csharp_1.UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value);
        const instance = App_1.App.compHub.AddComponent(instanceGo, UIFrame);
        instance._uiSetting = uiSetting;
        instance._uiFrameGo = instanceGo;
        instance.Initialize();
        instance.RegisterScreensInSetting();
        return instance;
    }
    Awake() {
        this.mainCanvas = this.gameObject.GetComponent((0, puerts_1.$typeof)(csharp_1.UnityEngine.Canvas));
        this.graphicRaycaster = this.gameObject.GetComponent((0, puerts_1.$typeof)(csharp_1.UnityEngine.UI.GraphicRaycaster));
    }
    Initialize() {
        if (this.panelLayer == null) {
            this.panelLayer = App_1.App.compHub.AddComponent(this.binder.Get("panelLayer"), PanelUILayer_1.PanelUILayer);
            if (this.panelLayer == null) {
                App_1.App.logger.LogError("[UI Frame] UI Frame lacks Panel Layer!");
            }
            else {
                this.panelLayer.Initialize();
            }
        }
        if (this.windowLayer == null) {
            this.windowLayer = App_1.App.compHub.AddComponent(this.binder.Get("windowLayer"), WindowUILayer_1.WindowUILayer);
            if (this.windowLayer == null) {
                App_1.App.logger.LogError("[UI Frame] UI Frame lacks Window Layer!");
            }
            else {
                this.windowLayer.Initialize();
                this.windowLayer.requestScreenBlock.Register(this.OnRequestScreenBlock.bind(this));
                this.windowLayer.requestScreenUnblock.Register(this.OnRequestScreenUnblock.bind(this));
            }
        }
    }
    RegisterScreensInSetting() {
        for (let index = 0; index < this._uiSetting.screensToRegister.Count(); index++) {
            const screenPrefab = this._uiSetting.screensToRegister.get_Item(index);
            if (this._uiSetting.binds.binds.has(screenPrefab.name) == false) {
                App_1.App.logger.LogError("Can not found TSController for " + screenPrefab.name);
                continue;
            }
            var tsControllerType = this._uiSetting.binds.binds.get(screenPrefab.name);
            const screenInstance = csharp_1.UnityEngine.Object.Instantiate(screenPrefab);
            const screenControllerInst = App_1.App.compHub.AddComponent(screenInstance, tsControllerType);
            const screenController = TSHelpers_1.TSHelpers.Cast(screenControllerInst, AUIScreenController_1.AUIScreenController);
            if (screenController != null) {
                this.RegisterScreen(screenPrefab.name, screenController, screenInstance.gameObject.transform);
                if (this._uiSetting.deactivateScreenGOs.value && screenInstance.activeSelf) {
                    screenInstance.SetActive(false);
                }
            }
            else {
                App_1.App.logger.LogError("[UI Frame] Register config type " + tsControllerType + " should impliment IUIScreenController.");
            }
        }
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
        let window = TSHelpers_1.TSHelpers.Cast(controller, AWindowController_1.AWindowControllerT);
        if (window != null) {
            App_1.App.logger.Log("regi window" + screenId);
            this.windowLayer.RegisterScreen(screenId, window);
            if (screenTransform.IsNotNull()) {
                this.windowLayer.ReparentScreen(controller, screenTransform);
            }
            return;
        }
        let panel = TSHelpers_1.TSHelpers.Cast(controller, APanelController_1.APanelControllerT);
        if (panel != null) {
            App_1.App.logger.Log("regi panel" + screenId);
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
            App_1.App.logger.Log("request block");
        }
    }
    OnRequestScreenUnblock() {
        if (this.graphicRaycaster.IsNotNull()) {
            this.graphicRaycaster.enabled = true;
            App_1.App.logger.Log("Request unblick");
        }
    }
}
exports.UIFrame = UIFrame;
//# sourceMappingURL=UIFrame.js.map