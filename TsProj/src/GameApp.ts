import { UnityEngine, Puergp, Puerts } from "csharp";
import { IAssetAddress } from "./CoreFramework/IAssetAddress";
import { FactoryProducer } from "./CoreFramework/FactoryProducer";
import { GameObjectFactory } from "./CoreFramework/GameObjectFactory";
import { AApp } from "./CoreFramework/AApp";
import { DefaultAssetAddress } from "./CoreFramework/DefaultAssetAddress";
import {ResourceLoader} from "./CoreFramework/ResourceLoader";
import {VariableTool} from "./CoreFramework/VariableTool";
import { UISetting } from "./UIFramework/Configs/UISetting";
import { UIFrame } from "./UIFramework/UIFrames/UIFrame";
import { ALogger } from "./CoreFramework/ALogger";
import { ServiceLocator } from "./CoreFramework/ServiceLocator";
import { UnityDebugLogger } from "./UnityDebugLogger";
import { $typeof } from "puerts";
import { DynamicClass } from "./CoreFramework/DynamicClass";
import { TestTSComponent } from "./TestTSComponent";
import { SampleScreenBind } from "./Sample/ScreenControllers/SampleScreenBind";
import { TSComponentHub } from "./CoreFramework/TSComponentHub";


export class GameApp extends AApp {
 
    public uiFrame: UIFrame;

    constructor(compHub: TSComponentHub) {
        super(compHub);
        
        //let tstcomp = new TestTSComponent(uiFrame.gameObject);

        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);

        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);

    }

    public Start(): void {
        this.uiFrame = UIFrame.Create(new UISetting(new SampleScreenBind()));
        this.uiFrame.OpenWindow("StartGameWindow");

        let StartDemoSignal = VariableTool.GetEvent("UITest/Signals/StartDemoSignal");
        StartDemoSignal.Register(this.OnStartDemo.bind(this));
    }

    public OnStartDemo(): void {
        this.uiFrame.ShowPanel("NavigationPanel");
    }

}