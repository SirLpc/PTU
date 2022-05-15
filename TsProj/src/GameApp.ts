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

export class GameApp extends App {
    constructor() {
        super();
        
        let uiFrame = UIFrame.Create(new UISetting());
    }
    public logger: ILogger = new UnityDebugLogger();
}