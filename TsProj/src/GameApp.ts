import { UnityEngine } from "csharp";
import { IAssetAddress } from "./CoreFramework/IAssetAddress";
import { FactoryProducer } from "./CoreFramework/FactoryProducer";
import { GameObjectFactory } from "./CoreFramework/GameObjectFactory";
import { IApp } from "./CoreFramework/IApp";
import { DefaultAssetAddress } from "./CoreFramework/DefaultAssetAddress";

export class GameApp implements IApp
{
    constructor()
    {
        FactoryProducer.GetFactory<GameObjectFactory>().GetInstance(new DefaultAssetAddress(""));
    }
}