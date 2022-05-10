import { Puergp } from "csharp";
import { AUIScreenController } from "../Core/AUIScreenController";
import { IWindowProperties } from "../Core/IScreenProperties";
import { IWindowController } from "../Core/IUIScreenController";
import { WindowProperties } from "./WindowProperties";


export abstract class AWindowControllerT<TProps extends IWindowProperties> extends AUIScreenController<WindowProperties> implements IWindowController {
    get hideOnForegroundLost(): Puergp.Variables.BoolVariable {
        return this.properties.hideOnForegroundLost;
    }
    get isPopup(): Puergp.Variables.BoolVariable {
        return this.properties.isPopup;
    }
    get priority(): Puergp.Variables.IntVariable {
        return this.properties.windowQueuePriority;
    }
 
    public UI_Close(): void {
        this.closeRequest.Dispatch(this.gameObject);
    }

    protected override SetProperties(props: WindowProperties): void {
        if (props != null) {
            if (props.suppressPrefabProperties.value == false) {
                props.hideOnForegroundLost = this.properties.hideOnForegroundLost;
                props.windowQueuePriority = this.properties.windowQueuePriority;
                props.isPopup = this.properties.isPopup;
            }

            this.properties = props;
        }
    }

    protected override HierarchyFixOnShow(): void {
        this.gameObject.transform.SetAsLastSibling();
    }
 }
 
 export abstract class AWindowController extends AWindowControllerT<WindowProperties> { }
