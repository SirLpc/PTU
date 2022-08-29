import { UnityEngine } from "csharp";
import { AssetManager } from "../../Core/Assets/AssetManager";
import { IAssetLoader } from "../../Core/Assets/IAssetLoader";
import { JsonAsset } from "../../Core/Assets/JsonAssetLoader";



/** Represents an Json asset loader. */
export class UnityJsonAssetLoader implements IAssetLoader {

    /** The extensions supported by this asset loader. */
    public get supportedExtensions(): string[] {
        return ["json"];
    }

    /**
     * Loads an asset with the given name.
     * @param assetName The name of the asset to be loaded.
     */
    public LoadAsset( assetName: string ): void {
        let extension = assetName.split( '.' ).pop().toLowerCase();
        let assetLoadKey = assetName.replace('.' + extension, '');

        let txtAst = UnityEngine.Resources.Load(assetLoadKey) as UnityEngine.TextAsset;
        this.onJsonLoaded(assetName, txtAst);
    }

    private onJsonLoaded( assetName: string, txtAsset: UnityEngine.TextAsset ): void {
        console.log( assetName );
        console.log( txtAsset );
        console.log( "onUnityJsonLoaded: assetName :", assetName );

        //TODO unity object null check
        let json = JSON.parse( txtAsset.text );
        let asset = new JsonAsset( assetName, json );
        AssetManager.onAssetLoaded( asset );
    }
}