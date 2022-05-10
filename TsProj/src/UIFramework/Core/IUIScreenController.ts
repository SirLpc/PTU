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
    get hideOnForegroundLost(): Puergp.Variables.BoolVariable;
    get isPopup(): Puergp.Variables.BoolVariable;
    get priority(): Puergp.Variables.IntVariable;
}

export interface IPanelController extends IUIScreenController {
    priority: Puergp.Variables.IntVariable;
}