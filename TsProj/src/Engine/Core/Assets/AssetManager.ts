import { Message } from "../Message/Message";
import { IAsset } from "./IAsset";
import { IAssetLoader } from "./IAssetLoader";
import { JsonAssetLoader } from "./JsonAssetLoader";
import { TextAssetLoader } from "./TestAssetLoader";


    /**
     * The message code prefix for asset load notifications.
     */
    export const MESSAGE_ASSET_LOADER_ASSET_LOADED = "MESSAGE_ASSET_LOADER_ASSET_LOADED::";

    /** Manages all assets in the engine. */
    export class AssetManager {

        private _loaders: IAssetLoader[] = [];
        private _loadedAssets: { [name: string]: IAsset } = {};


        /**
         * Registers the provided loader with this asset manager.
         * @param loader The loader to be registered.
         */
        public registerLoader( loader: IAssetLoader ): void {
            this._loaders.push( loader );
        }

        /**
         * A callback to be made from an asset loader when an asset is loaded.
         * @param asset
         */
        public onAssetLoaded( asset: IAsset ): void {
            this._loadedAssets[asset.Name] = asset;
            Message.send( MESSAGE_ASSET_LOADER_ASSET_LOADED + asset.Name, this, asset );
        }

        /**
         * Attempts to load an asset using a registered asset loader.
         * @param assetName The name/url of the asset to be loaded.
         */
        public loadAsset( assetName: string ): void {
            let extension = assetName.split( '.' ).pop().toLowerCase();
            for ( let l of this._loaders ) {
                if ( l.supportedExtensions.indexOf( extension ) !== -1 ) {
                    l.LoadAsset( assetName );
                    return;
                }
            }

            console.warn( "Unable to load asset with extension " + extension + " because there is no loader associated with it." );
        }

        /**
         * Indicates if an asset with the provided name has been loaded.
         * @param assetName The asset name to check.
         */
        public isAssetLoaded( assetName: string ): boolean {
            return this._loadedAssets[assetName] !== undefined;
        }

        /**
         * Attempts to get an asset with the provided name. If found, it is returned; otherwise, undefined is returned.
         * @param assetName The asset name to get.
         */
        public getAsset( assetName: string ): IAsset {
            if ( this._loadedAssets[assetName] !== undefined ) {
                return this._loadedAssets[assetName];
            } else {
                this.loadAsset( assetName );
            }

            // AssetManager.loadAsset() maybe sync
            if ( this._loadedAssets[assetName] !== undefined ) {
                return this._loadedAssets[assetName];
            }

            return undefined;
        }
    }