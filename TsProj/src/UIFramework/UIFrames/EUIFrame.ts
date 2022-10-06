import { BaseBehaviorComponent } from "../../Engine/Core/Behaviors/BaseBehaviorComponent";
import { CommonComponentBuilder } from "../../Engine/Core/Components/CommonComponent";
import { IVariableRef } from "../../Engine/Core/VariableReferences/IVariableRef";

export class EUIFrameBuilder extends CommonComponentBuilder {
    public get type(): string {
        return "EUIFrame";
    }
}


export class EUIFrame extends BaseBehaviorComponent {

    constructor(public deactivateScreenGOs: IVariableRef<boolean>) {
        super();
    }

    public override load(): void {
        this.commonData.injectField(this.deactivateScreenGOs, "deactivateScreenGOs");
        super.load();

        console.error(this.deactivateScreenGOs.value);
    }
}