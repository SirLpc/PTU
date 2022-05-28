import { Puergp } from "csharp";
import { AUIScreenController } from "../Core/AUIScreenController";
import { IPanelProperties } from "../Core/IScreenProperties";
import { IPanelController } from "../Core/IUIScreenController";
import { PanelPriority } from "./PanelPriority";
import { PanelProperties } from "./PanelProperties";


export abstract class APanelControllerT<TProps extends IPanelProperties> extends AUIScreenController<PanelProperties> implements IPanelController {
   public get priority(): Puergp.Variables.IntVariable {
       if (this.properties != null) {
           return this.properties.priority;
       }
       else {
           return null;
       }
   }

    
    protected override SetProperties(props: PanelProperties): void {
        super.SetProperties(props);
    }

 }
 
 export abstract class APanelController extends APanelControllerT<PanelProperties> { }
