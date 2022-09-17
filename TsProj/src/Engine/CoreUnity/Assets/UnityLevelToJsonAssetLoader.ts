import { TSEngine, UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { AssetManager } from "../../Core/Assets/AssetManager";
import { IAssetLoader } from "../../Core/Assets/IAssetLoader";
import { JsonAsset } from "../../Core/Assets/JsonAssetLoader";



/** Represents an Json asset loader. */
export class UnityLevelToJsonAssetLoader implements IAssetLoader {

    private _assetManger: AssetManager;

    constructor(assetManager: AssetManager) {
        this._assetManger = assetManager;
        this._assetManger.registerLoader(this);
    }

    /** The extensions supported by this asset loader. */
    public get supportedExtensions(): string[] {
        return ["level"];
    }

    /**
     * Loads an asset with the given name.
     * @param assetName The name of the asset to be loaded.
     */
    public LoadAsset( assetName: string ): void {
        let obj = UnityEngine.Resources.Load(assetName) as UnityEngine.GameObject;
        let inst = UnityEngine.GameObject.Instantiate(obj) as UnityEngine.GameObject;
        let levelInjector = inst.GetComponent($typeof(TSEngine.LevelInjector)) as TSEngine.LevelInjector;
        
        this.onJsonLoaded(assetName, levelInjector.ToJsonDescription());
    }

    private onJsonLoaded( assetName: string, levelDiscriptionJson: string ): void {
        console.log( "onUnityJsonLoaded: assetName :", assetName );

        //TODO unity object null check
        let json = JSON.parse( levelDiscriptionJson );
        let asset = new JsonAsset( assetName, json );
        this._assetManger.onAssetLoaded( asset );
    }
}