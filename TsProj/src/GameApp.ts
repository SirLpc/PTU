import { UnityEngine, Puergp, Puerts } from "csharp";
import { IAssetAddress } from "./CoreFramework/IAssetAddress";
import { FactoryProducer } from "./CoreFramework/FactoryProducer";
import { GameObjectFactory } from "./CoreFramework/GameObjectFactory";
import { App } from "./CoreFramework/App";
import { DefaultAssetAddress } from "./CoreFramework/DefaultAssetAddress";
import {ResourceLoader} from "./CoreFramework/ResourceLoader";
import {VariableTool} from "./CoreFramework/VariableTool";
import { UISetting } from "./UIFramework/Configs/UISetting";
import { UIFrame } from "./UIFramework/UIFrames/UIFrame";
import { Logger } from "./CoreFramework/Logger";
import { ServiceLocator } from "./CoreFramework/ServiceLocator";
import { UnityDebugLogger } from "./UnityDebugLogger";
import { $typeof } from "puerts";
import { DynamicClass } from "./CoreFramework/DynamicClass";
import { TestTSComponent } from "./TestTSComponent";
import { SampleScreenBind } from "./Sample/ScreenControllers/SampleScreenBind";
import { TSComponentHub } from "./CoreFramework/TSComponentHub";
import { CubeGO } from "./CubeGO";
import { TSScene } from "./CoreFramework/TSScene";


export class GameApp extends App {
 
    public uiFrame: UIFrame;

    private _cube: CubeGO;
    private _tsBehaviourRunner: TSScene;

    constructor(compHub: TSComponentHub, behaivourRunner: TSScene, cube: CubeGO) {
        super(compHub, behaivourRunner);

        this._cube = cube;
        
        //let tstcomp = new TestTSComponent(uiFrame.gameObject);

        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);

        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);

    }

    public Start(): void {

        this.AttachActor(this._cube);

        return;

        this.uiFrame = UIFrame.Create(new UISetting(new SampleScreenBind()));
        this.uiFrame.OpenWindow("StartGameWindow");

        let StartDemoSignal = VariableTool.GetEvent("UITest/Signals/StartDemoSignal");
        StartDemoSignal.Register(this.OnStartDemo.bind(this));
    }


    public OnStartDemo(): void {
        this.uiFrame.ShowPanel("NavigationPanel");
    }

}