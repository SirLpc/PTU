"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUILayer = void 0;
const App_1 = require("../../CoreFramework/App");
const BaseBehaviorComponent_1 = require("../../Engine/Core/Behaviors/BaseBehaviorComponent");
class AUILayer extends BaseBehaviorComponent_1.BaseBehaviorComponent {
    registeredScreens;
    Initialize() {
        this.registeredScreens = new Map();
    }
    ReparentScreen(controller, screenTransform) {
        // screenTransform.SetParent(this.gameObject.transform, false);
        this.owner.addChild(screenTransform);
    }
    RegisterScreen(screenId, controller) {
        if (this.registeredScreens.has(screenId) == false) {
            this.ProcessScreenRegister(screenId, controller);
        }
        else {
            App_1.App.logger.LogError("[AUILayerController] Screen controller already registered for id: " + screenId);
        }
    }
    UnregisterScreen(screenId, controller) {
        if (this.registeredScreens.has(screenId)) {
            this.ProcessScreenUnregister(screenId, controller);
        }
        else {
            App_1.App.logger.LogError("[AUILayerController] Screen controller not registered for id: " + screenId);
        }
    }
    ShowScreenById(screenId, properties) {
        if (this.registeredScreens.has(screenId)) {
            if (properties === undefined) {
                this.ShowScreen(this.registeredScreens.get(screenId));
            }
            else {
                this.ShowScreen(this.registeredScreens.get(screenId), properties);
            }
        }
        else {
            App_1.App.logger.LogError("[AUILayerController] Screen ID " + screenId + " not registered to this layer!");
        }
    }
    HideScreenById(screenId) {
        if (this.registeredScreens.has(screenId)) {
            this.HideScreen(this.registeredScreens.get(screenId));
        }
        else {
            App_1.App.logger.LogError("[AUILayerController] Could not hide Screen ID " + screenId + " as it is not registered to this layer!");
        }
    }
    IsScreenRegistered(screenId) {
        return this.registeredScreens.has(screenId);
    }
    HideAll(shouldAnimateWhenHiding = true) {
        this.registeredScreens.forEach(screen => {
            screen.Hide(shouldAnimateWhenHiding);
        });
    }
    ProcessScreenRegister(screenId, controller) {
        controller.screenId = screenId;
        this.registeredScreens.set(screenId, controller);
        controller.screenDestroyed.Register(this.OnScreenDestroyed.bind(this));
    }
    ProcessScreenUnregister(screenId, controller) {
        controller.screenDestroyed.Unregister(this.OnScreenDestroyed.bind(this));
        this.registeredScreens.delete(screenId);
    }
    OnScreenDestroyed(screen) {
        if (screen.screenId != null && screen.screenId != "" && this.IsScreenRegistered(screen.screenId)) {
            this.UnregisterScreen(screen.screenId, screen);
        }
    }
}
exports.AUILayer = AUILayer;
//# sourceMappingURL=AUILayer.js.map