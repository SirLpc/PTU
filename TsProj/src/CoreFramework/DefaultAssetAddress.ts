import { IAssetAddress } from "./IAssetAddress";

export class DefaultAssetAddress implements IAssetAddress
{
    address: string;
    
    constructor(address: string)
    {
        this.address = address;
    }
}