import { IAssetAddress } from "./IAssetAddress";

export interface IAbstractFactory<T>
{
    GetInstance(address: IAssetAddress): T;
}