"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityLevelToJsonAssetLoader = void 0;
const csharp_1 = require("csharp");
const AssetManager_1 = require("../../Core/Assets/AssetManager");
const JsonAssetLoader_1 = require("../../Core/Assets/JsonAssetLoader");
/** Represents an Json asset loader. */
class UnityLevelToJsonAssetLoader {
    /** The extensions supported by this asset loader. */
    get supportedExtensions() {
        return ["json"];
    }
    /**
     * Loads an asset with the given name.
     * @param assetName The name of the asset to be loaded.
     */
    LoadAsset(assetName) {
        let extension = assetName.split('.').pop().toLowerCase();
        let assetLoadKey = assetName.replace('.' + extension, '');
        let txtAst = csharp_1.UnityEngine.Resources.Load(assetLoadKey);
        this.onJsonLoaded(assetName, txtAst);
    }
    onJsonLoaded(assetName, txtAsset) {
        console.log("onUnityJsonLoaded: assetName :", assetName);
        //TODO unity object null check
        let json = JSON.parse(txtAsset.text);
        let asset = new JsonAssetLoader_1.JsonAsset(assetName, json);
        AssetManager_1.AssetManager.onAssetLoaded(asset);
    }
}
exports.UnityLevelToJsonAssetLoader = UnityLevelToJsonAssetLoader;
//# sourceMappingURL=UnityPrefabAssetLoader.js.map