

import { Puergp, UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { App } from "../../CoreFramework/App";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";
import { TestTSComponent } from "../../TestTSComponent";
import { UISetting } from "../Configs/UISetting";
import { PanelUILayer } from "../Panel/PanelUILayer";
import { WindowUILayer } from "../Window/WindowUILayer";

export class UIFrame extends ATSComponent
{
    private _uiSetting : UISetting;
    private _uiFrameGo : UnityEngine.GameObject;

    private panelLayer: PanelUILayer;
    private windowLayer: WindowUILayer;

    private mainCanvas: UnityEngine.Canvas;
    private graphicRaycaster: UnityEngine.UI.GraphicRaycaster;

    public get uiCamera(): UnityEngine.Camera {
        return this.mainCanvas.worldCamera;
    }

    public static Create(uiSetting:UISetting) : UIFrame  {
        let instanceGo = UnityEngine.GameObject.Instantiate(uiSetting.uiFrameTemplate.value) as UnityEngine.GameObject;
        let instance = new UIFrame(instanceGo, true);

        instance._uiSetting = uiSetting;
        instance.Initialize();
        return instance;
    }

    public Awake(): void {
        this.mainCanvas = this.gameObject.GetComponent($typeof(UnityEngine.Canvas)) as UnityEngine.Canvas;
    }

    public OnEnable(): void {
        App.logger.LogError("onenable)");

        let tst: TestTSComponent = new TestTSComponent(this.gameObject, false);
        let getComp :TestTSComponent = this.GetTSComponet(TestTSComponent);
        App.logger.Log("ddddddddddddd-------------------");
        App.logger.Log(this.gameObject.name);
        App.logger.Log(getComp.gameObject.name);
    }

    public Initialize() {
        if (this.panelLayer == null) {
            //this.panelLayer = this.gameObject.GetComponentInChildren($typeof(Uni))
        }
    }

    public Update(): void {
        // App.logger.Log("bbL");
    }
}

