"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelUILayer = void 0;
const App_1 = require("../../CoreFramework/App");
const TSHelpers_1 = require("../../CoreFramework/TSHelpers");
const AUILayer_1 = require("../Core/AUILayer");
const APanelController_1 = require("./APanelController");
const PanelPriority_1 = require("./PanelPriority");
class PanelUILayer extends AUILayer_1.AUILayer {
    enableUpdate;
    priorityLayers = null;
    Awake() {
        App_1.App.logger.Log("PanelUILayer.Awake()");
        if (this.priorityLayers == null) {
            let prioList = [];
            let panelLayerGO = this.binder.Get("panelLayer");
            let prioPanelLayer = this.binder.Get("priorityPanelLayer");
            let tutorialPanelLayer = this.binder.Get("tutorialPanelLayer");
            prioList.push(new PanelPriority_1.PanelPriorityLayerListEntry(PanelPriority_1.PanelPriority.None, panelLayerGO.transform));
            prioList.push(new PanelPriority_1.PanelPriorityLayerListEntry(PanelPriority_1.PanelPriority.Prioritary, prioPanelLayer.transform));
            prioList.push(new PanelPriority_1.PanelPriorityLayerListEntry(PanelPriority_1.PanelPriority.Tutorial, tutorialPanelLayer.transform));
            this.priorityLayers = new PanelPriority_1.PanelPriorityLayerList(prioList);
        }
    }
    ReparentScreen(controller, screenTransform) {
        let ctl = TSHelpers_1.TSHelpers.Cast(controller, APanelController_1.APanelController);
        if (ctl != null) {
            this.ReparentToParaLayer(ctl.priority.value, screenTransform);
        }
        else {
            super.ReparentScreen(controller, screenTransform);
        }
    }
    ShowScreen(screen, properties) {
        if (properties === undefined) {
            screen.Show();
        }
        else {
            screen.Show(properties);
        }
    }
    HideScreen(screen) {
        screen.Hide();
    }
    IsPanelVisition(panelId) {
        if (this.registeredScreens.has(panelId) == null) {
            return false;
        }
        return this.registeredScreens.get(panelId).isVisible;
    }
    ReparentToParaLayer(priority, screenTransform) {
        let trans = null;
        if (this.priorityLayers.paraLayerLookup.has(priority)) {
            trans = this.priorityLayers.paraLayerLookup.get(priority);
        }
        else {
            trans = this.gameObject.transform;
        }
        screenTransform.SetParent(trans, false);
    }
}
exports.PanelUILayer = PanelUILayer;
//# sourceMappingURL=PanelUILayer.js.map