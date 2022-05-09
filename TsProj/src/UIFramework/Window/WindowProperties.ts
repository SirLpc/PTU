import { Puergp } from "csharp";
import { IWindowProperties } from "../Core/IScreenProperties";

export class WindowProperties implements IWindowProperties {
    windowQueuePriority: Puergp.Variables.IntVariable;
    hideOnForegroundLost: Puergp.Variables.BoolVariable;
    isPopup: Puergp.Variables.BoolVariable;
    suppressPrefabProperties: Puergp.Variables.BoolVariable;
}