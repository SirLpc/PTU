import { UnityEngine } from "csharp";
import { IAssetAddress } from "./IAssetAddress";

export interface IAssetLoader
{
    
    Load(address: IAssetAddress): UnityEngine.Object; 

}