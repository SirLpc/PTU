import { Puergp, UnityEngine } from "csharp";
import { App } from "../../CoreFramework/App";
import { AUILayer } from "../Core/AUILayer";
import { IScreenProperties, IWindowProperties } from "../Core/IScreenProperties";
import { IUIScreenController, IWindowController } from "../Core/IUIScreenController";
import { WindowHistoryEntry } from "./WindowHistoryEntry";
import { WindowParaLayer } from "./WindowParaLayer";
import { WindowPriority } from "./WindowPriority";

export class WindowUILayer extends AUILayer<IWindowController> {

    private priorityParaLayer: WindowParaLayer;

    public currentWindow: IWindowController;

    public windowQueue: WindowHistoryEntry[];
    public windowHistory: WindowHistoryEntry[];

    public requestScreenBlock: Puergp.Events.GameEvent;
    public requestScreenUnblock: Puergp.Events.GameEvent;

    private screensTransitioning: Set<IUIScreenController>;

    private get isScreenTransitionInProgress() {
        return this.screensTransitioning.size != 0;
    }

    public override Initialize(): void {
        super.Initialize();

        this.registeredScreens = new Map<string, IWindowController>();
        this.windowQueue = [];
        this.windowHistory = [];
        this.screensTransitioning = new Set<IUIScreenController>();
    }

    protected override ProcessScreenRegister(screenId: string, controller: IWindowController): void {
        super.ProcessScreenRegister(screenId, controller);
        controller.inTransitionFinished.Register(this.OnInAnimationFinished.bind(this));
        controller.outTransitionFinished.Register(this.OnOutAnimationFinished.bind(this));
        controller.closeRequest.Register(this.OnCloseRequestedByWindow.bind(this));
    }

    protected override ProcessScreenUnregister(screenId: string, controller: IWindowController): void {
        super.ProcessScreenUnregister(screenId, controller);
        controller.inTransitionFinished.Unregister(this.OnInAnimationFinished.bind(this));
        controller.outTransitionFinished.Unregister(this.OnOutAnimationFinished.bind(this));
        controller.closeRequest.Unregister(this.OnCloseRequestedByWindow.bind(this));
    }


    public ShowScreen(screen: IWindowController): void;
    public ShowScreen<TProps extends IScreenProperties>(screen: IWindowController, properties: TProps): void;
    public ShowScreen(screen: any, properties?: any): void {
        if (properties === undefined) {
            this.ShowScreen(screen, null);
        }
        else {
            let windowProp = properties as IWindowProperties;
            if (this.ShouldEnqueue(screen, windowProp)) {
                this.EnqueueWindow(screen, properties);
            }
            else {
                this.DoShowS(screen, windowProp);
            }
        }
    }

    public HideScreen(screen: IWindowController): void {
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
            App.logger.LogError("[WindowUILayer] Hide requested on WindowId " + screen.screenId + " but that`s not the currently open one (" + (this.currentWindow != null ? this.currentWindow.screenId : "current is null") + ")! Ignoring request.")
        }

    }

    public override HideAll(shouldAnimateWhenHiding: boolean = true): void {
        super.HideAll(shouldAnimateWhenHiding);
        this.currentWindow = null;
        this.priorityParaLayer.RefreshDarken();
        this.windowHistory.length = 0;
    }

    public override ReparentScreen(controller: IUIScreenController, screenTransform: UnityEngine.Transform): void {
        let window = controller as IWindowController;

        if (window == null) {
            App.logger.LogError("[WindowUILayer] Screen " + screenTransform.name + " is not a Window!");
        }
        else {
            if (window.isPopup) {
                this.priorityParaLayer.AddScreen(screenTransform);
                return;
            }
        }

        super.ReparentScreen(controller, screenTransform);
    }

    private EnqueueWindow<TProp extends IScreenProperties>(screen: IWindowController, properties: TProp) : void {
        this.windowQueue.push(new WindowHistoryEntry(screen, properties as unknown as IWindowProperties))
    }

    private ShouldEnqueue(controller: IWindowController, windowProp: IWindowProperties) {
        if (this.currentWindow == null && this.windowQueue.length == 0) {
            return false;
        } 

        if (windowProp != null && windowProp.suppressPrefabProperties.value) {
            return windowProp.windowQueuePriority.value != WindowPriority.ForceForeground;
        }

        if (controller.windowPriority.value != WindowPriority.ForceForeground) {
            return true;
        }

        return false;
    }

    private ShowPreviousInHistory() {
        if (this.windowHistory.length > 0) {
            let window: WindowHistoryEntry = this.windowHistory.pop();
            this.DoShow(window);
        }
    }

    private ShowNextInQueue() {
        if (this.windowQueue.length > 0) {
            let window: WindowHistoryEntry = this.windowQueue.shift();
            this.DoShow(window);
        }
    }

    private DoShowS(screen: IWindowController, properties: IWindowProperties) {
        this.DoShow(new WindowHistoryEntry(screen, properties));
    }

    private DoShow(windowEntry: WindowHistoryEntry) {
        if (this.currentWindow == windowEntry.screen) {
            App.logger.LogWarning(
                "[WindowUILayer] The requested WindowId (" + this.currentWindow.screenId + ") is already open! This will add a duplicate to the " +
                "history and might cause inconsistent behaviour. It is recommended that if you need to open the same" +
                "screen multiple times (eg: when implementing a warning message pop-up), it closes itself upon the player input" +
                "that triggers the continuation of the flow."
                );
        }
        else if (this.currentWindow != null && this.currentWindow.hideOnForegroundLost.IsNull() == false && windowEntry.screen.isPopup.value == false) {
            this.currentWindow.Hide();
        }

        this.windowHistory.push(windowEntry);
        this.AddTransition(windowEntry.screen);

        if (windowEntry.screen.isPopup) {
            this.priorityParaLayer.DarkenBG();
        }

        windowEntry.Show();

        this.currentWindow = windowEntry.screen;
    }


    private OnInAnimationFinished(screen: IUIScreenController): void {
        this.RemoveTransition(screen);
    }

   private OnOutAnimationFinished(screen: IUIScreenController ): void {
        this.RemoveTransition(screen);
        let window = screen as IWindowController;
        if (window.isPopup) {
            this.priorityParaLayer.RefreshDarken();
        }
   }

    private OnCloseRequestedByWindow(screen: IUIScreenController): void {
        this.HideScreen(screen as IWindowController);
    }

    private AddTransition(screen: IUIScreenController) {
        this.screensTransitioning.add(screen);
        if (this.requestScreenBlock.IsNull() == false) {
            this.requestScreenBlock.Dispatch();
        }
    }

    private RemoveTransition(screen: IUIScreenController) {
        this.screensTransitioning.delete(screen);
        if (this.isScreenTransitionInProgress == false) {
            if (this.requestScreenUnblock.IsNull() == false) {
                this.requestScreenUnblock.Dispatch();
            }
        }
    }
}