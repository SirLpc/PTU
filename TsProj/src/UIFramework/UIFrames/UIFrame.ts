

import { Puergp, UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { App } from "../../CoreFramework/App";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";
import { TestTSComponent } from "../../TestTSComponent";
import { UISetting } from "../Configs/UISetting";
import { IPanelProperties, IWindowProperties } from "../Core/IScreenProperties";
import { IPanelController, IUIScreenController, IWindowController } from "../Core/IUIScreenController";
import { PanelUILayer } from "../Panel/PanelUILayer";
import { WindowUILayer } from "../Window/WindowUILayer";

export class UIFrame extends ATSComponent
{
    private _uiSetting : UISetting;
    private _uiFrameGo : UnityEngine.GameObject;

    private panelLayer: PanelUILayer;
    private windowLayer: WindowUILayer;

    private mainCanvas: UnityEngine.Canvas;
    private graphicRaycaster: UnityEngine.UI.GraphicRaycaster;

    public get uiCamera(): UnityEngine.Camera {
        return this.mainCanvas.worldCamera;
    }

    public static Create(uiSetting:UISetting) : UIFrame  {
        let instanceGo = UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value) as UnityEngine.GameObject;
        let instance = new UIFrame(instanceGo, true);

        instance._uiSetting = uiSetting;
        instance.Initialize();
        return instance;
    }

    public Awake(): void {
        this.mainCanvas = this.gameObject.GetComponent($typeof(UnityEngine.Canvas)) as UnityEngine.Canvas;
        App.logger.Log(this.mainCanvas.name);
    }

    public OnEnable(): void {
        App.logger.LogError("uiframe onenable");

        // let tst: TestTSComponent = new TestTSComponent(this.gameObject, false);
        // let getComp :TestTSComponent = this.GetTSComponet(TestTSComponent);
        // App.logger.Log("ddddddddddddd-------------------");
        // App.logger.Log(this.gameObject.name);
        // App.logger.Log(getComp.gameObject.name);
    }

    public Initialize() {
        if (this.panelLayer == null) {
            this.panelLayer = this.GetTSComponetInChildren(PanelUILayer);
            if (this.panelLayer == null) {
                App.logger.LogError("[UI Frame] UI Frame lacks Panel Layer!");
            }
            else {
                this.panelLayer.Initialize();
            }
        }

        if (this.windowLayer == null) {
            this.windowLayer = this.GetTSComponetInChildren(WindowUILayer);
            if (this.windowLayer == null) {
                App.logger.LogError("[UI Frame] UI Frame lacks Window Layer!");
            }
            else {
                this.windowLayer.Initialize();
                this.windowLayer.requestScreenBlock.Register(this.OnRequestScreenBlock.bind(this));
                this.windowLayer.requestScreenUnblock.Register(this.OnRequestScreenUnblock.bind(this));
            }
        }

        App.logger.Log(this.gameObject.name);

        this.graphicRaycaster = this.gameObject.GetComponent($typeof(UnityEngine.UI.GraphicRaycaster)) as UnityEngine.UI.GraphicRaycaster; 
    }


    public ShowPanel(screenId: string): void;

    public ShowPanel<T extends IPanelProperties>(screenId: string, properties: T): void;

    public ShowPanel(screenId: string, properties?: any) {
        if (properties === undefined) {
            this.panelLayer.ShowScreenById(screenId);
        }
        else {
            this.panelLayer.ShowScreenById(screenId, properties);
        }
    }

    public HidePanel(screenId: string) {
        this.panelLayer.HideScreenById(screenId);
    }

    public OpenWindow(screenId: string): void;

    public OpenWindow<T extends IWindowProperties>(screenId: string, properties: T): void;

    public  OpenWindow(screenId: string, properties?: any): void {
        if (properties === undefined) {
            this.windowLayer.ShowScreenById(screenId);
        }
        else {
            this.windowLayer.ShowScreenById(screenId, properties);
        }
    }

    public CloseWindow(screenId: string): void {
        this.windowLayer.HideScreenById(screenId);
    }

    public CloseCurrentWindow(): void {
        if (this.windowLayer.currentWindow != null) {
            this.CloseWindow(this.windowLayer.currentWindow.screenId);
        }
    }

    public ShowScreen(screenId: string) {
        if (this.IsWindowRegistered(screenId)) {
            this.OpenWindow(screenId);
            return;
        }

        if (this.IsPanelRegistered(screenId)) {
            this.ShowPanel(screenId);
            return;
        }

        App.logger.LogError("Tried to open Screen id " + screenId + " but it's not registered as Window or Panel!");
    }

    public RegisterScreen(screenId: string , controller: IUIScreenController, screenTransform: UnityEngine.Transform) : void {
        let window = controller as IWindowController;
        if (window != null) {
            this.windowLayer.RegisterScreen(screenId, window);
            if (screenTransform.IsNotNull()) {
                this.windowLayer.ReparentScreen(controller, screenTransform);
            }

            return;
        }

        let panel = controller as IPanelController;
        if (panel != null) {
            this.panelLayer.RegisterScreen(screenId, panel);
            if (screenTransform.IsNotNull()) {
                this.panelLayer.ReparentScreen(controller, screenTransform);
            }
        }
    }

    public RegisterPanel<TPanel extends IPanelController>(screenId: string, controller: TPanel) : void {
        this.panelLayer.RegisterScreen(screenId, controller);
    }

    public UnregisterPanel<TPanel extends IPanelController>(screenId: string, controller: TPanel) : void {
        this.panelLayer.RegisterScreen(screenId, controller);
    }

    public RegisterWindow<TWindow extends IWindowController>(screenId: string, controller: TWindow) : void {
        this.windowLayer.RegisterScreen(screenId, controller);
    }

    public UnregisterWindow<TWindow extends IWindowController>(screenId: string, controller: TWindow) : void {
        this.windowLayer.RegisterScreen(screenId, controller);
    }

    public IsPanelOpen(panelId: string) : boolean {
        return this.panelLayer.IsPanelVisition(panelId);
    }

    public HideAll(animate: boolean = true) {
        this.CloseAllWindows(animate);
        this.HideAllPanels(animate);
    }

    public HideAllPanels(animate: boolean = true) {
        this.panelLayer.HideAll(animate);
    }

    public CloseAllWindows(animate:boolean = true) {
        this.windowLayer.HideAll(animate);
    }

    public IsScreenRegistered(screenId: string) : boolean {
        if (this.IsWindowRegistered(screenId)) {
            return true;
        }

        if (this.IsPanelRegistered(screenId)) {
            return true;
        }
        
        return false;
    }

    public IsWindowRegistered(screenId: string) : boolean {
        if (this.windowLayer.IsScreenRegistered(screenId)) {
            return true;
        }
    }

    public IsPanelRegistered(screenId: string) : boolean {
        if (this.panelLayer.IsScreenRegistered(screenId)) {
            return true;
        }
    }

    public OnRequestScreenBlock() : void {
        if (this.graphicRaycaster.IsNotNull()) {
            this.graphicRaycaster.enabled = false;
        }
    }

    public OnRequestScreenUnblock() : void {
        if (this.graphicRaycaster.IsNotNull()) {
            this.graphicRaycaster.enabled = true;
        }
    }
}



