import { UnityEngine, PuertsTest, System, Puergp } from 'csharp'
import { IBaseConfig as IBaseConfig } from '../../CoreFramework/IBaseConfig';
import { VariableTool } from '../../CoreFramework/VariableTool';



export class UISetting implements IBaseConfig {

    location: string = "UITest/";
    uiFrameTemplate : Puergp.Variables.GameObjectVariable;
    initializeOnAwake : Puergp.Variables.BoolVariable;

    constructor(location: string = null) {
        if (location != null) {
            this.location = location;
        }

        this.uiFrameTemplate = VariableTool.Get(this.location + "uiFrameTemplate")
        this.initializeOnAwake = VariableTool.Get(this.location + "initializeOnAwake")
    }


}