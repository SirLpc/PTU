import { UnityEngine } from "csharp";
import { Logger } from "../../CoreFramework/Logger";
import { App } from "../../CoreFramework/App";
import { ServiceLocator } from "../../CoreFramework/ServiceLocator";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";
import { IScreenProperties } from "./IScreenProperties";
import { IUIScreenController } from "./IUIScreenController";
import { BaseBehaviorComponent } from "../../Engine/Core/Behaviors/BaseBehaviorComponent";
import { TEntity } from "../../Engine/Core/World/TEntity";

export abstract class AUILayer<TScreen extends IUIScreenController> extends BaseBehaviorComponent {
    protected registeredScreens: Map<string, TScreen>;

    public abstract ShowScreen(screen: TScreen): void;

    public abstract ShowScreen<TProps extends IScreenProperties>(screen: TScreen, properties: TProps): void;

    public abstract HideScreen(screen: TScreen): void;

    public Initialize(): void {
        this.registeredScreens = new Map<string, TScreen>();
    }

    public ReparentScreen(controller: IUIScreenController, screenTransform: TEntity) {
        // screenTransform.SetParent(this.gameObject.transform, false);
        this.owner.addChild(screenTransform);
    }

    public RegisterScreen(screenId: string, controller: TScreen) {
        if (this.registeredScreens.has(screenId) == false) {
            this.ProcessScreenRegister(screenId, controller);
        }
        else {
            App.logger.LogError("[AUILayerController] Screen controller already registered for id: " + screenId)
        }
    }

    public UnregisterScreen(screenId: string, controller: TScreen): void {
        if (this.registeredScreens.has(screenId)) {
            this.ProcessScreenUnregister(screenId, controller);
        }
        else {
            App.logger.LogError("[AUILayerController] Screen controller not registered for id: " + screenId);
        }
    }

    public ShowScreenById(screenId: string): void;
    public ShowScreenById<TProps extends IScreenProperties>(screenId: string, properties: TProps): void;
    public ShowScreenById(screenId: string, properties?: any): void {
        if (this.registeredScreens.has(screenId)) {
            if (properties === undefined) {
                this.ShowScreen(this.registeredScreens.get(screenId));
            }
            else {
                this.ShowScreen(this.registeredScreens.get(screenId), properties);
            }
        }
        else {
            App.logger.LogError("[AUILayerController] Screen ID " + screenId + " not registered to this layer!");
        }
    }

    public HideScreenById(screenId: string): void {
        if (this.registeredScreens.has(screenId)) {
            this.HideScreen(this.registeredScreens.get(screenId));
        }
        else {
            App.logger.LogError("[AUILayerController] Could not hide Screen ID " + screenId + " as it is not registered to this layer!");
        }
    }

    public IsScreenRegistered(screenId: string): boolean {
        return this.registeredScreens.has(screenId);
    }

    public HideAll(shouldAnimateWhenHiding: boolean = true): void {
        this.registeredScreens.forEach(screen => {
            screen.Hide(shouldAnimateWhenHiding);
        });
    }

    protected ProcessScreenRegister(screenId: string, controller: TScreen): void {
        controller.screenId = screenId;
        this.registeredScreens.set(screenId, controller);
        controller.screenDestroyed.Register(this.OnScreenDestroyed.bind(this));
    }

    protected ProcessScreenUnregister(screenId: string, controller: TScreen): void {
        controller.screenDestroyed.Unregister(this.OnScreenDestroyed.bind(this));
        this.registeredScreens.delete(screenId);
    }

    private OnScreenDestroyed(screen: IUIScreenController): void {
        if (screen.screenId != null && screen.screenId != "" && this.IsScreenRegistered(screen.screenId)) {
            this.UnregisterScreen(screen.screenId, screen as TScreen);
        }
    }

}