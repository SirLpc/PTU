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
import { ILogger } from "./CoreFramework/ILogger";
import { ServiceLocator } from "./CoreFramework/ServiceLocator";
import { UnityDebugLogger } from "./UnityDebugLogger";
import { $typeof } from "puerts";
import { DynamicClass } from "./CoreFramework/DynamicClass";
import { TestTSComponent } from "./TestTSComponent";


export class GameApp extends App {
    constructor() {
        super();
        
        let uiFrame = UIFrame.Create(new UISetting());
        //uiFrame.OpenWindow("StartGameWindow");

        let tstcomp = new TestTSComponent(uiFrame.gameObject, false);

        // App.logger.Log(uiFrame.gameObject.name);
        // let tsCompBinder : Puergp.TSComponentBinder = uiFrame.gameObject.GetComponent($typeof(Puergp.TSComponentBinder)) as Puergp.TSComponentBinder;
        // App.logger.Log(tsCompBinder.tsTComponentType);

        // let plugin = DynamicClass.Create(tsCompBinder.tsTComponentType, uiFrame.gameObject, true);

    }
    public logger: ILogger = new UnityDebugLogger();
}