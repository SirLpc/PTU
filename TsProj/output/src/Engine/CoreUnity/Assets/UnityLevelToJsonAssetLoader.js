"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityLevelToJsonAssetLoader = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
const AssetManager_1 = require("../../Core/Assets/AssetManager");
const JsonAssetLoader_1 = require("../../Core/Assets/JsonAssetLoader");
/** Represents an Json asset loader. */
class UnityLevelToJsonAssetLoader {
    /** The extensions supported by this asset loader. */
    get supportedExtensions() {
        return ["level"];
    }
    /**
     * Loads an asset with the given name.
     * @param assetName The name of the asset to be loaded.
     */
    LoadAsset(assetName) {
        let obj = csharp_1.UnityEngine.Resources.Load(assetName);
        let inst = csharp_1.UnityEngine.GameObject.Instantiate(obj);
        let levelInjector = inst.GetComponent((0, puerts_1.$typeof)(csharp_1.TSEngine.LevelInjector));
        this.onJsonLoaded(assetName, levelInjector.ToJsonDescription());
    }
    onJsonLoaded(assetName, levelDiscriptionJson) {
        console.log("onUnityJsonLoaded: assetName :", assetName);
        //TODO unity object null check
        let json = JSON.parse(levelDiscriptionJson);
        let asset = new JsonAssetLoader_1.JsonAsset(assetName, json);
        AssetManager_1.AssetManager.onAssetLoaded(asset);
    }
}
exports.UnityLevelToJsonAssetLoader = UnityLevelToJsonAssetLoader;
//# sourceMappingURL=UnityLevelToJsonAssetLoader.js.map