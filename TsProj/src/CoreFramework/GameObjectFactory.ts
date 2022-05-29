import { UnityEngine } from "csharp";
import { IAbstractFactory } from "./IAbstractFactory";
import { IAssetAddress } from "./IAssetAddress";
import { IAssetLoader } from "./IAssetLoader";
import { TSHelpers } from "./TSHelpers";

export class GameObjectFactory implements IAbstractFactory<UnityEngine.GameObject>
{

    public nullGameObject : UnityEngine.GameObject = new UnityEngine.GameObject("NullGameObject");

    private _loader : IAssetLoader = null;

    public constructor(loader: IAssetLoader)
    {
        this._loader = loader;
    }

    public GetInstance(address: IAssetAddress): UnityEngine.GameObject
    {
        let ast = this._loader.Load(address);
        let prefab = TSHelpers.Cast<UnityEngine.GameObject>(ast, UnityEngine.GameObject);
        if (prefab.IsNotNull()) {
            return UnityEngine.Object.Instantiate(prefab) as UnityEngine.GameObject;
        }

        return this.nullGameObject;
    }
    
}