import { UnityEngine } from "csharp";
import { IAbstractFactory } from "./IAbstractFactory";
import { IAssetAddress } from "./IAssetAddress";
import { IAssetLoadder } from "./IAssetLoadder";

export class GameObjectFactory implements IAbstractFactory<UnityEngine.GameObject>
{

    public nullGameObject : UnityEngine.GameObject = new UnityEngine.GameObject("NullGameObject");

    private _loader : IAssetLoadder = null;

    public constructor(loader: IAssetLoadder)
    {
        this._loader = loader;
    }

    public GetInstance(address: IAssetAddress): UnityEngine.GameObject
    {
        let prefab = this._loader.Load(address) as UnityEngine.GameObject;
        if (prefab == null)
        {
            return this.nullGameObject;
        }

        return UnityEngine.Object.Instantiate(prefab) as UnityEngine.GameObject;
    }
    
}