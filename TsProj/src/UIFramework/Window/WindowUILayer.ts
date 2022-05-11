import { Puergp } from "csharp";
import { AUILayer } from "../Core/AUILayer";
import { IScreenProperties } from "../Core/IScreenProperties";
import { IUIScreenController, IWindowController } from "../Core/IUIScreenController";
import { WindowHistoryEntry } from "./WindowHistoryEntry";
import { WindowParaLayer } from "./WindowParaLayer";

export class WindowUILayer extends AUILayer<IWindowController> {

    private priorityParaLayer: WindowParaLayer;

    public currentWindow: IWindowController;

    public windowQueue: WindowHistoryEntry[];
    public windowHistory: WindowHistoryEntry[];

    public requestScreenBlock: Puergp.Events.GameEvent;
    public requestScreenUnlock: Puergp.Events.GameEvent;

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
        throw new Error("Method not implemented.");
    }
    public HideScreen(screen: IWindowController): void {
        throw new Error("Method not implemented.");
    }

    private OnInAnimationFinished(screen: IUIScreenController): void {

    }

   private OnOutAnimationFinished(screen: IUIScreenController ): void {
        
   }

    private OnCloseRequestedByWindow(screen: IUIScreenController): void {

    }
}