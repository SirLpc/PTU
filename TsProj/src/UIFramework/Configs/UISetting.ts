import { UnityEngine, PuertsTest, System, Puergp } from 'csharp'
import { App } from '../../CoreFramework/App';
import { IBaseConfig as IBaseConfig } from '../../CoreFramework/IBaseConfig';
import { VariableTool } from '../../CoreFramework/VariableTool';

export abstract class AScreenTSComponentBind {
    public abstract get binds(): Map<string, any>;
}

export class UISetting implements IBaseConfig {

    public location: string = "UITest/";
    public uiFrameTemplate : Puergp.Variables.GameObjectVariable;
    public screensToRegister : Puergp.Collections.GameObjectCollection;
    public deactivateScreenGOs : Puergp.Variables.BoolVariable;
    public binds : AScreenTSComponentBind;

    constructor(binds: AScreenTSComponentBind, location: string = null) {
        if (location != null) {
            this.location = location;
        }

        this.binds = binds;

        this.uiFrameTemplate = VariableTool.Get(this.location + "uiFrameTemplate")
        this.screensToRegister = VariableTool.GetCollection(this.location + "screensToRegister")
        this.deactivateScreenGOs = VariableTool.Get(this.location + "deactivateScreenGOs")
    }


}