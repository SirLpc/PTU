
import { PuergpCs, UnityEngine } from "csharp";
import { ATSComponent } from "../CoreFramework/TSComponentHub";

/// <reference path="./Configs/UISetting.ts" />
export namespace PuergpTs {
    export class UIFrame extends ATSComponent {
        private _uiSetting : PuergpTs.UISetting;
        private _uiFrameGo : UnityEngine.GameObject;
    
        public static Create(uiSetting:UISetting) : UIFrame  {
            let instanceGo = UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value) as UnityEngine.GameObject;
            let instance = new UIFrame(instanceGo, true);
    
            instance._uiSetting = uiSetting;
            return instance;
        }
    }
}

