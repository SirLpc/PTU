import { UnityEngine, PuertsTest, System, Puergp } from 'csharp'
import { App } from '../../CoreFramework/App';
import { IBaseConfig as IBaseConfig } from '../../CoreFramework/IBaseConfig';
import { VariableTool } from '../../CoreFramework/VariableTool';



export class UISetting implements IBaseConfig {

    public location: string = "UITest/";
    public uiFrameTemplate : Puergp.Variables.GameObjectVariable;
    public screensToRegister : Puergp.Collections.GameObjectCollection;
    public deactivateScreenGOs : Puergp.Variables.BoolVariable;

    constructor(location: string = null) {
        if (location != null) {
            this.location = location;
        }

        this.uiFrameTemplate = VariableTool.Get(this.location + "uiFrameTemplate")
        this.screensToRegister = VariableTool.GetCollection(this.location + "screensToRegister")
        this.deactivateScreenGOs = VariableTool.Get(this.location + "deactivateScreenGOs")
    }


}