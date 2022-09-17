"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
const AssetManager_1 = require("../Assets/AssetManager");
const Message_1 = require("../Message/Message");
/**
 * Manages levels in the engine. Levels (for now) are registered with this manager
 * so that they may be loaded on demand. Register a level name
 * with a file path and load the level configurations dynamically.
 */
class LevelManager {
    _registeredLevels = {};
    _activeLevel;
    _configLoaded = false;
    _assetManager;
    _levelProvider;
    /** Private constructor to enforce singleton pattern. */
    constructor(assetManager, levelProvider) {
        this._assetManager = assetManager;
        this._levelProvider = levelProvider;
    }
    /** Indicates if this manager is loaded. */
    get isLoaded() {
        return this._configLoaded;
    }
    /** Gets the active level. */
    get activeLevel() {
        return this._activeLevel;
    }
    /** Loads this manager. */
    load() {
        // Get the asset(s). TODO: This probably should come from a central asset manifest.
        let asset = this._assetManager.getAsset("assets/levels/levels.json");
        if (asset !== undefined) {
            this.processLevelConfigAsset(asset);
        }
        else {
            // Listen for the asset load.
            Message_1.Message.subscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json", this.onMessage.bind(this));
        }
    }
    /**
     * Changes the active level to the one with the provided name.
     * @param name The name of the level to change to.
     */
    changeLevel(name) {
        if (this._activeLevel !== undefined) {
            this._activeLevel.onDeactivated();
            this._activeLevel.unload();
            this._activeLevel = undefined;
        }
        // Make sure the level is registered.
        if (this._registeredLevels[name] !== undefined) {
            // If the level asset is already loaded, get it and use it to load the level.
            // Otherwise, retrieve the asset and load the level upon completion.
            if (this._assetManager.isAssetLoaded(this._registeredLevels[name])) {
                let asset = this._assetManager.getAsset(this._registeredLevels[name]);
                this.loadLevel(asset);
            }
            else {
                Message_1.Message.subscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + this._registeredLevels[name], this.onMessage.bind(this));
                this._assetManager.loadAsset(this._registeredLevels[name]);
            }
        }
        else {
            throw new Error("Level named:" + name + " is not registered.");
        }
    }
    /**
     * The message handler.
     * @param message The message to be handled.
     */
    onMessage(message) {
        // TODO: one for each asset.
        if (message.code === AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json") {
            Message_1.Message.unsubscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json", this.onMessage);
            this.processLevelConfigAsset(message.context);
        }
        else if (message.code.indexOf(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED) !== -1) {
            console.log("Level loaded:" + message.code);
            let asset = message.context;
            this.loadLevel(asset);
        }
    }
    loadLevel(asset) {
        console.log("Loading level:" + asset.Name);
        let data = asset.Data;
        let levelName;
        if (data.name === undefined) {
            throw new Error("Zone file format exception: Zone name not present.");
        }
        else {
            levelName = String(data.name);
        }
        let description;
        if (data.description !== undefined) {
            description = String(data.description);
        }
        this._activeLevel = this._levelProvider();
        this._activeLevel.setUp(levelName, description);
        this._activeLevel.initialize(data);
        this._activeLevel.onActivated();
        this._activeLevel.load();
        Message_1.Message.send("LEVEL_LOADED", this);
    }
    processLevelConfigAsset(asset) {
        let levels = asset.Data.levels;
        if (levels) {
            for (let level of levels) {
                if (level.name !== undefined && level.file !== undefined) {
                    this._registeredLevels[level.name] = String(level.file);
                }
                else {
                    throw new Error("Invalid level config file format: name or file is missing");
                }
            }
        }
        // TODO: Should only set this if ALL queued assets have loaded.
        this._configLoaded = true;
    }
}
exports.LevelManager = LevelManager;
//# sourceMappingURL=LevelManager.js.map