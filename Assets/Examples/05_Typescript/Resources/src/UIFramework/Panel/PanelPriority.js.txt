"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelPriorityLayerList = exports.PanelPriorityLayerListEntry = exports.PanelPriority = void 0;
var PanelPriority;
(function (PanelPriority) {
    PanelPriority[PanelPriority["None"] = 0] = "None";
    PanelPriority[PanelPriority["Priority"] = 1] = "Priority";
    PanelPriority[PanelPriority["Tutorial"] = 2] = "Tutorial";
    PanelPriority[PanelPriority["Blocker"] = 3] = "Blocker";
})(PanelPriority = exports.PanelPriority || (exports.PanelPriority = {}));
class PanelPriorityLayerListEntry {
    priority;
    targetParent;
    constructor(priority, targetParent) {
        this.priority = priority;
        this.targetParent = targetParent;
    }
}
exports.PanelPriorityLayerListEntry = PanelPriorityLayerListEntry;
class PanelPriorityLayerList {
    paraLayers;
    lookup;
    get paraLayerLookup() {
        if (this.lookup == null || this.lookup.size == 0) {
            this.CacheLookup();
        }
        return this.lookup;
    }
    CacheLookup() {
        this.lookup = new Map();
        for (const iterator of this.paraLayers) {
            this.lookup.set(iterator.priority, iterator.targetParent);
        }
    }
    constructor(entries) {
        this.paraLayers = entries;
    }
}
exports.PanelPriorityLayerList = PanelPriorityLayerList;
//# sourceMappingURL=PanelPriority.js.map