import { Puergp } from "csharp";

export interface IScreenProperties {}

export interface IPanelProperties extends IScreenProperties {
    priority: Puergp.Variables.IntVariable;
}

export interface IWindowProperties extends IScreenProperties {
    windowQueuePriority: Puergp.Variables.IntVariable;
    hideOnForegroundLost: Puergp.Variables.BoolVariable;
    isPopup: Puergp.Variables.BoolVariable;
    suppressPrefabProperties: Puergp.Variables.BoolVariable;
}