import { PuergpCs } from "csharp";
import { IScreenProperties } from "./IScreenProperties";

export interface IUIScreenController {

    screenId: string;
    isVisible: boolean;

    Show(props: IScreenProperties): void;
    Hide(animate: boolean) : void;

    inTransitionFinished: PuergpCs.Events.GameObjectEvent;
    outTransitionFinished: PuergpCs.Events.GameObjectEvent;
    closeRequest: PuergpCs.Events.GameObjectEvent;
    screenDestroyed: PuergpCs.Events.GameObjectEvent;

}

export interface IWindowController extends IUIScreenController {
    hideOnForegroundLost: PuergpCs.Variables.BoolVariable;
    isPopup: PuergpCs.Variables.BoolVariable;
    priority: PuergpCs.Variables.IntVariable;
}

export interface IPanelController extends IUIScreenController {
    priority: PuergpCs.Variables.IntVariable;
}