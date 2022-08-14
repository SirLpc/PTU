import { UnityEngine } from "csharp";
import { App } from "../../CoreFramework/App";
import { TSHelpers } from "../../CoreFramework/TSHelpers";
import { AUILayer } from "../Core/AUILayer";
import { IScreenProperties } from "../Core/IScreenProperties";
import { IPanelController, IUIScreenController } from "../Core/IUIScreenController";
import { APanelController } from "./APanelController";
import { PanelPriority, PanelPriorityLayerList, PanelPriorityLayerListEntry } from "./PanelPriority";

export class PanelUILayer extends AUILayer<IPanelController> {
    public enableUpdate: boolean;

    private priorityLayers: PanelPriorityLayerList = null;

    public override Awake(): void {
        App.logger.Log("PanelUILayer.Awake()");

        if (this.priorityLayers == null) {
            let prioList : PanelPriorityLayerListEntry[] = [];
            let panelLayerGO = this.binder.Get("panelLayer") as UnityEngine.GameObject;
            let prioPanelLayer = this.binder.Get("priorityPanelLayer") as UnityEngine.GameObject;
            let tutorialPanelLayer = this.binder.Get("tutorialPanelLayer") as UnityEngine.GameObject;
            prioList.push(new PanelPriorityLayerListEntry(PanelPriority.None, panelLayerGO.transform));
            prioList.push(new PanelPriorityLayerListEntry(PanelPriority.Prioritary, prioPanelLayer.transform));
            prioList.push(new PanelPriorityLayerListEntry(PanelPriority.Tutorial, tutorialPanelLayer.transform));
            this.priorityLayers = new PanelPriorityLayerList(prioList);
        }
    }

    public override ReparentScreen(controller: IUIScreenController, screenTransform: UnityEngine.Transform): void {
        let ctl = TSHelpers.Cast<IPanelController>(controller, APanelController);
        if (ctl != null) {
            this.ReparentToParaLayer(ctl.priority.value, screenTransform);
        }
        else {
            super.ReparentScreen(controller, screenTransform);
        }
    }


    public ShowScreen(screen: IPanelController): void;
    public ShowScreen<TProps extends IScreenProperties>(screen: IPanelController, properties: TProps): void;
    public ShowScreen(screen: IPanelController, properties?: any): void {
        if (properties === undefined) {
            screen.Show();
        }
        else {
            screen.Show(properties);
        }
    }

    public HideScreen(screen: IPanelController): void {
        screen.Hide();
    }

    public IsPanelVisition(panelId: string) {
        if (this.registeredScreens.has(panelId) == null) {
            return false;
        }

        return this.registeredScreens.get(panelId).isVisible;
    }

    private ReparentToParaLayer(priority: PanelPriority, screenTransform: UnityEngine.Transform) {
        let trans: UnityEngine.Transform = null;
        if (this.priorityLayers.paraLayerLookup.has(priority)) {
            trans = this.priorityLayers.paraLayerLookup.get(priority);
        }
        else {
            trans = this.gameObject.transform;
        }

        screenTransform.SetParent(trans, false);
    }

}