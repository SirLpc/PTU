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
    _loaders = [];
    _loadedAssets = {};
    /**
     * Registers the provided loader with this asset manager.
     * @param loader The loader to be registered.
     */
    registerLoader(loader) {
        this._loaders.push(loader);
    }
    /**
     * A callback to be made from an asset loader when an asset is loaded.
     * @param asset
     */
    onAssetLoaded(asset) {
        this._loadedAssets[asset.Name] = asset;
        Message_1.Message.send(exports.MESSAGE_ASSET_LOADER_ASSET_LOADED + asset.Name, this, asset);
    }
    /**
     * Attempts to load an asset using a registered asset loader.
     * @param assetName The name/url of the asset to be loaded.
     */
    loadAsset(assetName) {
        let extension = assetName.split('.').pop().toLowerCase();
        for (let l of this._loaders) {
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
    isAssetLoaded(assetName) {
        return this._loadedAssets[assetName] !== undefined;
    }
    /**
     * Attempts to get an asset with the provided name. If found, it is returned; otherwise, undefined is returned.
     * @param assetName The asset name to get.
     */
    getAsset(assetName) {
        if (this._loadedAssets[assetName] !== undefined) {
            return this._loadedAssets[assetName];
        }
        else {
            this.loadAsset(assetName);
        }
        // AssetManager.loadAsset() maybe sync
        if (this._loadedAssets[assetName] !== undefined) {
            return this._loadedAssets[assetName];
        }
        return undefined;
    }
}
exports.AssetManager = AssetManager;
//# sourceMappingURL=AssetManager.js.map