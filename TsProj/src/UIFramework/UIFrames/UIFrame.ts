

import { PuergpCs, UnityEngine } from "csharp";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";
import { UISetting as UISetting } from "../Configs/UISetting";

export class UIFrame extends ATSComponent
{
    private _uiSetting : UISetting;
    private _uiFrameGo : UnityEngine.GameObject;

    public static Create(uiSetting:UISetting) : UIFrame  {
        let instanceGo = UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value) as UnityEngine.GameObject;
        let instance = new UIFrame(instanceGo, true);

        instance._uiSetting = uiSetting;
        return instance;
    }
}