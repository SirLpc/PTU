import { PuergpCs } from "csharp";

export interface IScreenProperties {}

export interface IPanelProperties extends IScreenProperties {
    priority: PuergpCs.Variables.IntVariable;
}

export interface IWindowProperties extends IScreenProperties {
    windowQueuePriority: PuergpCs.Variables.IntVariable;
    hideOnForegroundLost: PuergpCs.Variables.BoolVariable;
    isPopup: PuergpCs.Variables.BoolVariable;
    suppressPrefabProperties: PuergpCs.Variables.BoolVariable;
}