"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowUILayer = void 0;
const AApp_1 = require("../../CoreFramework/AApp");
const TSHelpers_1 = require("../../CoreFramework/TSHelpers");
const AUILayer_1 = require("../Core/AUILayer");
const AWindowController_1 = require("./AWindowController");
const WindowHistoryEntry_1 = require("./WindowHistoryEntry");
const WindowPriority_1 = require("./WindowPriority");
class WindowUILayer extends AUILayer_1.AUILayer {
    enableUpdate;
    priorityParaLayer;
    currentWindow;
    windowQueue;
    windowHistory;
    requestScreenBlock;
    requestScreenUnblock;
    screensTransitioning;
    get isScreenTransitionInProgress() {
        return this.screensTransitioning.size != 0;
    }
    Awake() {
        super.Awake();
        this.requestScreenBlock = this.binder.Get("requestScreenBlock");
        this.requestScreenUnblock = this.binder.Get("requestScreenUnblock");
    }
    Initialize() {
        super.Initialize();
        this.registeredScreens = new Map();
        this.windowQueue = [];
        this.windowHistory = [];
        this.screensTransitioning = new Set();
    }
    ProcessScreenRegister(screenId, controller) {
        super.ProcessScreenRegister(screenId, controller);
        controller.inTransitionFinished.Register(this.OnInAnimationFinished.bind(this));
        controller.outTransitionFinished.Register(this.OnOutAnimationFinished.bind(this));
        controller.closeRequest.Register(this.OnCloseRequestedByWindow.bind(this));
    }
    ProcessScreenUnregister(screenId, controller) {
        super.ProcessScreenUnregister(screenId, controller);
        controller.inTransitionFinished.Unregister(this.OnInAnimationFinished.bind(this));
        controller.outTransitionFinished.Unregister(this.OnOutAnimationFinished.bind(this));
        controller.closeRequest.Unregister(this.OnCloseRequestedByWindow.bind(this));
    }
    ShowScreen(screen, properties) {
        if (properties === undefined) {
            this.ShowScreen(screen, null);
        }
        else {
            let windowProp = properties;
            if (this.ShouldEnqueue(screen, windowProp)) {
                this.EnqueueWindow(screen, properties);
            }
            else {
                this.DoShowS(screen, windowProp);
            }
        }
    }
    HideScreen(screen) {
        if (screen == this.currentWindow) {
            this.windowHistory.pop();
            this.AddTransition(screen);
            screen.Hide();
            this.currentWindow = null;
            if (this.windowQueue.length > 0) {
                this.ShowNextInQueue();
            }
            else if (this.windowHistory.length > 0) {
                this.ShowPreviousInHistory();
            }
        }
        else {
            AApp_1.AApp.logger.LogError("[WindowUILayer] Hide requested on WindowId " + screen.screenId + " but that`s not the currently open one (" + (this.currentWindow != null ? this.currentWindow.screenId : "current is null") + ")! Ignoring request.");
        }
    }
    HideAll(shouldAnimateWhenHiding = true) {
        super.HideAll(shouldAnimateWhenHiding);
        this.currentWindow = null;
        this.priorityParaLayer.RefreshDarken();
        this.windowHistory.length = 0;
    }
    ReparentScreen(controller, screenTransform) {
        let window = TSHelpers_1.TSHelpers.Cast(controller, AWindowController_1.AWindowControllerT);
        if (window == null) {
            AApp_1.AApp.logger.LogError("[WindowUILayer] Screen " + screenTransform.name + " is not a Window!");
        }
        else {
            if (window.isPopup.value) {
                this.priorityParaLayer.AddScreen(screenTransform);
                return;
            }
        }
        super.ReparentScreen(controller, screenTransform);
    }
    EnqueueWindow(screen, properties) {
        this.windowQueue.push(new WindowHistoryEntry_1.WindowHistoryEntry(screen, properties));
    }
    ShouldEnqueue(controller, windowProp) {
        if (this.currentWindow == null && this.windowQueue.length == 0) {
            return false;
        }
        if (windowProp != null && windowProp.suppressPrefabProperties.value) {
            return windowProp.windowQueuePriority.value != WindowPriority_1.WindowPriority.ForceForeground;
        }
        if (controller.windowPriority.value != WindowPriority_1.WindowPriority.ForceForeground) {
            return true;
        }
        return false;
    }
    ShowPreviousInHistory() {
        if (this.windowHistory.length > 0) {
            let window = this.windowHistory.pop();
            this.DoShow(window);
        }
    }
    ShowNextInQueue() {
        if (this.windowQueue.length > 0) {
            let window = this.windowQueue.shift();
            this.DoShow(window);
        }
    }
    DoShowS(screen, properties) {
        this.DoShow(new WindowHistoryEntry_1.WindowHistoryEntry(screen, properties));
    }
    DoShow(windowEntry) {
        if (this.currentWindow == windowEntry.screen) {
            AApp_1.AApp.logger.LogWarning("[WindowUILayer] The requested WindowId (" + this.currentWindow.screenId + ") is already open! This will add a duplicate to the " +
                "history and might cause inconsistent behaviour. It is recommended that if you need to open the same" +
                "screen multiple times (eg: when implementing a warning message pop-up), it closes itself upon the player input" +
                "that triggers the continuation of the flow.");
        }
        else if (this.currentWindow != null && this.currentWindow.hideOnForegroundLost.IsNull() == false && windowEntry.screen.isPopup.value == false) {
            this.currentWindow.Hide();
        }
        this.windowHistory.push(windowEntry);
        this.AddTransition(windowEntry.screen);
        if (windowEntry.screen.isPopup.value) {
            this.priorityParaLayer.DarkenBG();
        }
        windowEntry.Show();
        this.currentWindow = windowEntry.screen;
    }
    OnInAnimationFinished(screenGo) {
        const tsComp = AApp_1.AApp.compHub.GetTSComponet(screenGo, AWindowController_1.AWindowController);
        this.RemoveTransition((tsComp));
    }
    OnOutAnimationFinished(screenGo) {
        const tsComp = AApp_1.AApp.compHub.GetTSComponet(screenGo, AWindowController_1.AWindowController);
        const ctr = (tsComp);
        this.RemoveTransition(ctr);
        let window = ctr;
        if (window.isPopup.value) {
            this.priorityParaLayer.RefreshDarken();
        }
    }
    OnCloseRequestedByWindow(screen) {
        this.HideScreen(screen);
    }
    AddTransition(screen) {
        this.screensTransitioning.add(screen);
        if (this.requestScreenBlock.IsNull() == false) {
            this.requestScreenBlock.Dispatch();
        }
    }
    RemoveTransition(screen) {
        this.screensTransitioning.delete(screen);
        if (this.isScreenTransitionInProgress == false) {
            if (this.requestScreenUnblock.IsNull() == false) {
                this.requestScreenUnblock.Dispatch();
            }
        }
    }
}
exports.WindowUILayer = WindowUILayer;
//# sourceMappingURL=WindowUILayer.js.map