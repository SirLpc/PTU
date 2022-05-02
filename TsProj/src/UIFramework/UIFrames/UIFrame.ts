import { UnityEngine } from "csharp";
import { UISetting as UISetting } from "../Configs/UISetting";

export class UIFrame
{
    private _uiSetting : UISetting;
    private _go : UnityEngine.GameObject;

    public Create(uiSetting:UISetting) : boolean 
    {
        this._uiSetting = uiSetting;

        this._go = UnityEngine.GameObject.Instantiate(this._uiSetting.uiFrameTemplate) as UnityEngine.GameObject;



        return true;
    }
}