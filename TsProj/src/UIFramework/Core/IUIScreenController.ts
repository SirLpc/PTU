import { Puergp } from "csharp";
import { IScreenProperties } from "./IScreenProperties";

export interface IUIScreenController {

    screenId: string;
    isVisible: boolean;

    Show(props: IScreenProperties): void;
    Hide(animate: boolean) : void;

    inTransitionFinished: Puergp.Events.GameObjectEvent;
    outTransitionFinished: Puergp.Events.GameObjectEvent;
    closeRequest: Puergp.Events.GameObjectEvent;
    screenDestroyed: Puergp.Events.GameObjectEvent;

}

export interface IWindowController extends IUIScreenController {
    hideOnForegroundLost: Puergp.Variables.BoolVariable;
    isPopup: Puergp.Variables.BoolVariable;
    priority: Puergp.Variables.IntVariable;
}

export interface IPanelController extends IUIScreenController {
    priority: Puergp.Variables.IntVariable;
}