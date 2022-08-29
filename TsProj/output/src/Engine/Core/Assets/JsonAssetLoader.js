"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssetLoader = exports.JsonAsset = void 0;
const AssetManager_1 = require("./AssetManager");
/** Represents an Json asset */
class JsonAsset {
    /** The name of this asset. */
    Name;
    /** The data of this asset. */
    Data;
    /**
     * Creates a new image asset.
     * @param name The name of this asset.
     * @param data The data of this asset.
     */
    constructor(name, data) {
        this.Name = name;
        this.Data = data;
    }
}
exports.JsonAsset = JsonAsset;
/** Represents an Json asset loader. */
class JsonAssetLoader {
    /** The extensions supported by this asset loader. */
    get supportedExtensions() {
        return ["json"];
    }
    /**
     * Loads an asset with the given name.
     * @param assetName The name of the asset to be loaded.
     */
    LoadAsset(assetName) {
        let request = new XMLHttpRequest();
        request.open("GET", assetName);
        request.addEventListener("load", this.onJsonLoaded.bind(this, assetName, request));
        request.send();
    }
    onJsonLoaded(assetName, request) {
        console.log("onJsonLoaded: assetName/request", assetName, request);
        if (request.readyState === request.DONE) {
            let json = JSON.parse(request.responseText);
            let asset = new JsonAsset(assetName, json);
            AssetManager_1.AssetManager.onAssetLoaded(asset);
        }
    }
}
exports.JsonAssetLoader = JsonAssetLoader;
//# sourceMappingURL=JsonAssetLoader.js.map