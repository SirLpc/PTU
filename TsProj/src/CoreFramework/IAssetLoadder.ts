import { UnityEngine } from "csharp";
import { IAssetAddress } from "./IAssetAddress";

export interface IAssetLoadder
{
    
    Load(address: IAssetAddress): UnityEngine.Object; 

}