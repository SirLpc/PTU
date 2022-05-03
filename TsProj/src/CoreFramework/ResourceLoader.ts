import { IAssetLoader } from "./IAssetLoader";
import {IAssetAddress} from "./IAssetAddress";
import { UnityEngine } from "csharp";

export class ResourceLoader implements IAssetLoader{
    Load(address: IAssetAddress): UnityEngine.Object {
        return UnityEngine.Resources.Load(address.address);
    }
}