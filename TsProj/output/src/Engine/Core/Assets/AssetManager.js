"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetManager = exports.MESSAGE_ASSET_LOADER_ASSET_LOADED = void 0;
const Message_1 = require("../Message/Message");
/**
 * The message code prefix for asset load notifications.
 */
exports.MESSAGE_ASSET_LOADER_ASSET_LOADED = "MESSAGE_ASSET_LOADER_ASSET_LOADED::";
/** Manages all assets in the engine. */
class AssetManager {
    static _loaders = [];
    static _loadedAssets = {};
    /** Private to enforce static method calls and prevent instantiation. */
    constructor() {
    }
    /** Initializes this manager. */
    static Initialize() {
        // AssetManager._loaders.push( new ImageAssetLoader() );
        // AssetManager._loaders.push( new JsonAssetLoader() );
        // AssetManager._loaders.push( new TextAssetLoader() );
    }
    /**
     * Registers the provided loader with this asset manager.
     * @param loader The loader to be registered.
     */
    static registerLoader(loader) {
        AssetManager._loaders.push(loader);
    }
    /**
     * A callback to be made from an asset loader when an asset is loaded.
     * @param asset
     */
    static onAssetLoaded(asset) {
        AssetManager._loadedAssets[asset.Name] = asset;
        Message_1.Message.send(exports.MESSAGE_ASSET_LOADER_ASSET_LOADED + asset.Name, this, asset);
    }
    /**
     * Attempts to load an asset using a registered asset loader.
     * @param assetName The name/url of the asset to be loaded.
     */
    static loadAsset(assetName) {
        let extension = assetName.split('.').pop().toLowerCase();
        for (let l of AssetManager._loaders) {
            if (l.supportedExtensions.indexOf(extension) !== -1) {
                l.LoadAsset(assetName);
                return;
            }
        }
        console.warn("Unable to load asset with extension " + extension + " because there is no loader associated with it.");
    }
    /**
     * Indicates if an asset with the provided name has been loaded.
     * @param assetName The asset name to check.
     */
    static isAssetLoaded(assetName) {
        return AssetManager._loadedAssets[assetName] !== undefined;
    }
    /**
     * Attempts to get an asset with the provided name. If found, it is returned; otherwise, undefined is returned.
     * @param assetName The asset name to get.
     */
    static getAsset(assetName) {
        if (AssetManager._loadedAssets[assetName] !== undefined) {
            return AssetManager._loadedAssets[assetName];
        }
        else {
            AssetManager.loadAsset(assetName);
        }
        return undefined;
    }
}
exports.AssetManager = AssetManager;
//# sourceMappingURL=AssetManager.js.map