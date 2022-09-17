import { AssetManager, MESSAGE_ASSET_LOADER_ASSET_LOADED } from "../Assets/AssetManager";
import { JsonAsset } from "../Assets/JsonAssetLoader";
import { Message } from "../Message/Message";
import { Level } from "./Level";


    /**
     * Manages levels in the engine. Levels (for now) are registered with this manager
     * so that they may be loaded on demand. Register a level name
     * with a file path and load the level configurations dynamically.
     */
    export class LevelManager {

        private _registeredLevels: { [name: string]: string } = {};
        private _activeLevel: Level;
        private _configLoaded: boolean = false;

        private _assetManager: AssetManager;

        /** Private constructor to enforce singleton pattern. */
        public constructor( assetManager: AssetManager) {
            this._assetManager = assetManager;
        }

        /** Indicates if this manager is loaded. */
        public get isLoaded(): boolean {
            return this._configLoaded;
        }

        /** Gets the active level. */
        public get activeLevel(): Level {
            return this._activeLevel;
        }

        /** Loads this manager. */
        public load(): void {

            // Get the asset(s). TODO: This probably should come from a central asset manifest.
            let asset = this._assetManager.getAsset( "assets/levels/levels.json" );
            if ( asset !== undefined ) {
                this.processLevelConfigAsset( asset as JsonAsset );
            } else {

                // Listen for the asset load.
                Message.subscribeCallback( MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json", this.onMessage.bind(this) );
                }
        }

        /**
         * Changes the active level to the one with the provided name.
         * @param name The name of the level to change to.
         */
        public changeLevel( name: string ): void {
            if ( this._activeLevel !== undefined ) {
                this._activeLevel.onDeactivated();
                this._activeLevel.unload();
                this._activeLevel = undefined;
            }

            // Make sure the level is registered.
            if ( this._registeredLevels[name] !== undefined ) {

                // If the level asset is already loaded, get it and use it to load the level.
                // Otherwise, retrieve the asset and load the level upon completion.
                if ( this._assetManager.isAssetLoaded( this._registeredLevels[name] ) ) {
                    let asset = this._assetManager.getAsset( this._registeredLevels[name] );
                    this.loadLevel( asset );
                } else {
                    Message.subscribeCallback( MESSAGE_ASSET_LOADER_ASSET_LOADED + this._registeredLevels[name], this.onMessage.bind(this) );
                    this._assetManager.loadAsset( this._registeredLevels[name] );
                }
            } else {
                throw new Error( "Level named:" + name + " is not registered." );
            }
        }

        /**
         * The message handler.
         * @param message The message to be handled.
         */
        public onMessage( message: Message ): void {
            // TODO: one for each asset.
            if ( message.code === MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json" ) {
                Message.unsubscribeCallback( MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json",
                this.onMessage );

                    this.processLevelConfigAsset( message.context as JsonAsset );
            } else if ( message.code.indexOf( MESSAGE_ASSET_LOADER_ASSET_LOADED ) !== -1 ) {
                console.log( "Level loaded:" + message.code );
                let asset = message.context as JsonAsset;
                this.loadLevel( asset );
            }
        }

        private loadLevel( asset: JsonAsset ): void {
            console.log( "Loading level:" + asset.Name );
            let data = asset.Data;

            let levelName: string;
            if ( data.name === undefined ) {
                throw new Error( "Zone file format exception: Zone name not present." );
            } else {
                levelName = String( data.name );
            }

            let description: string;
            if ( data.description !== undefined ) {
                description = String( data.description );
            }

            this._activeLevel = new Level( levelName, description );
            this._activeLevel.initialize( data );
            this._activeLevel.onActivated();
            this._activeLevel.load();


            Message.send( "LEVEL_LOADED", this );
        }

        private processLevelConfigAsset( asset: JsonAsset ): void {
            let levels = asset.Data.levels;
            if ( levels ) {
                for ( let level of levels ) {
                    if ( level.name !== undefined && level.file !== undefined ) {
                        this._registeredLevels[level.name] = String( level.file );
                    } else {
                        throw new Error( "Invalid level config file format: name or file is missing" );
                    }
                }
            }

            // TODO: Should only set this if ALL queued assets have loaded.
            this._configLoaded = true;
        }
    }