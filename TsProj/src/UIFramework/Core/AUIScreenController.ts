import { Puergp } from "csharp";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";
import { ATransitionComponent } from "../ScreenTransitions/ATransitionComponent";
import { IScreenProperties } from "./IScreenProperties";
import { IUIScreenController } from "./IUIScreenController";

export abstract class AUIScreenController<TProps extends IScreenProperties> extends ATSComponent implements IUIScreenController {
    screenId: string;
    isVisible: boolean;

    inTransitionFinished: Puergp.Events.GameObjectEvent;
    outTransitionFinished: Puergp.Events.GameObjectEvent;
    closeRequest: Puergp.Events.GameObjectEvent;
    screenDestroyed: Puergp.Events.GameObjectEvent;

    public animIn: ATransitionComponent;
    public animOut: ATransitionComponent;
    public properties: TProps;

    protected Awake(): void {
        this.AddListeners();
    }

    public OnDestroy(): void {
        if (this.screenDestroyed.IsNull() == false) {
            this.screenDestroyed.Dispatch(this.gameObject);
        }

        this.inTransitionFinished = null;
        this.outTransitionFinished = null;
        this.closeRequest = null;
        this.RemoveListeners();
    }

    protected AddListeners(): void {}

    protected RemoveListeners(): void {}

    protected OnPropertiesSet(): void {}

    protected WhileHiding(): void {}

    protected SetProperties(props: TProps) : void {
        this.properties = props;
    }

    protected HierarchyFixOnShow(): void {}

    public Hide(animate: boolean): void {
        this.DoAnimation(animate ? this.animOut : null, this.OnTransitionOutFinished.bind(this), false);
        this.WhileHiding();
    }

    Show(props: IScreenProperties = null): void {
        if (props != null) {
            this.SetProperties(props as TProps);
        }

        this.HierarchyFixOnShow();
        this.OnPropertiesSet();

        if (this.gameObject.activeSelf == false) {
            this.DoAnimation(this.animIn, this.OnTransitionOutFinished.bind(this), true);
        }
        else {
            if (this.inTransitionFinished.IsNull() == false) {
                this.inTransitionFinished.Dispatch(this.gameObject);
            }
        }
    }

    private DoAnimation(caller: ATransitionComponent, callWhenFinished: ()=>void, isVisible:boolean) {
        
    }




}