import { UnityEngine } from "csharp";

export enum PanelPriority {
    None = 0,
    Prioritary = 1,
    Tutorial = 2,
    Blocker = 3,
}

export class PanelPriorityLayerListEntry {
    public constructor(
        public priority: PanelPriority,
        public targetParent: UnityEngine.Transform)
        { }
}

export class PanelPriorityLayerList {
    private paraLayers: PanelPriorityLayerListEntry[];

    private lookup: Map<PanelPriority, UnityEngine.Transform> = null;

    public get paraLayerLookup() : Map<PanelPriority, UnityEngine.Transform> {
        if (this.lookup == null || this.lookup.size == 0) {
            this.CacheLookup();
        }

        return this.lookup;
    }

    private CacheLookup(): void {
        this.lookup = new Map<PanelPriority, UnityEngine.Transform>();
        for (const iterator of this.paraLayers) {
            this.lookup.set(iterator.priority, iterator.targetParent);
        }
    }

    public constructor(entries: PanelPriorityLayerListEntry[]) {
        this.paraLayers = entries;
    }

}