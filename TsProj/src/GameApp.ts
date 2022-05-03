
import { UnityEngine, PuergpCs } from "csharp";
import { IAssetAddress } from "./CoreFramework/IAssetAddress";
import { FactoryProducer } from "./CoreFramework/FactoryProducer";
import { GameObjectFactory } from "./CoreFramework/GameObjectFactory";
import { IApp } from "./CoreFramework/IApp";
import { DefaultAssetAddress } from "./CoreFramework/DefaultAssetAddress";
import {ResourceLoader} from "./CoreFramework/ResourceLoader";
import {VariableTool} from "./CoreFramework/VariableTool";
import { PuergpTs } from "./UIFramework/UIFrame";
// import { UISetting } from "./UIFramework/Configs/UISetting";

export class GameApp implements IApp
{
    constructor()
    {
        let uiFrame = PuergpTs.UIFrame.Create(new PuergpTs.UISetting());



    }
}