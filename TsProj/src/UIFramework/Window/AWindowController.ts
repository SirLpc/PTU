import { Puergp } from "csharp";
import { AUIScreenController } from "../Core/AUIScreenController";
import { IWindowController } from "../Core/IUIScreenController";
import { WindowProperties } from "./WindowProperties";


export abstract class AWindowControllerT<TProps> extends AUIScreenController<WindowProperties> implements IWindowController {
    hideOnForegroundLost: Puergp.Variables.BoolVariable;
    isPopup: Puergp.Variables.BoolVariable;
    priority: Puergp.Variables.IntVariable;

 }
 
 export abstract class AWindowController extends AWindowControllerT<WindowProperties> { }
