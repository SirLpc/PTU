"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
const AssetManager_1 = require("../Assets/AssetManager");
const Message_1 = require("../Message/Message");
const Level_1 = require("./Level");
/**
 * Manages levels in the engine. Levels (for now) are registered with this manager
 * so that they may be loaded on demand. Register a level name
 * with a file path and load the level configurations dynamically.
 */
class LevelManager {
    static _registeredLevels = {};
    static _activeLevel;
    static _configLoaded = false;
    /** Private constructor to enforce singleton pattern. */
    constructor() {
    }
    /** Indicates if this manager is loaded. */
    static get isLoaded() {
        return LevelManager._configLoaded;
    }
    /** Gets the active level. */
    static get activeLevel() {
        return LevelManager._activeLevel;
    }
    /** Loads this manager. */
    static load() {
        // Get the asset(s). TODO: This probably should come from a central asset manifest.
        let asset = AssetManager_1.AssetManager.getAsset("assets/levels/levels.json");
        if (asset !== undefined) {
            LevelManager.processLevelConfigAsset(asset);
        }
        else {
            // Listen for the asset load.
            Message_1.Message.subscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json", LevelManager.onMessage);
        }
    }
    /**
     * Changes the active level to the one with the provided name.
     * @param name The name of the level to change to.
     */
    static changeLevel(name) {
        if (LevelManager._activeLevel !== undefined) {
            LevelManager._activeLevel.onDeactivated();
            LevelManager._activeLevel.unload();
            LevelManager._activeLevel = undefined;
        }
        // Make sure the level is registered.
        if (LevelManager._registeredLevels[name] !== undefined) {
            // If the level asset is already loaded, get it and use it to load the level.
            // Otherwise, retrieve the asset and load the level upon completion.
            if (AssetManager_1.AssetManager.isAssetLoaded(LevelManager._registeredLevels[name])) {
                let asset = AssetManager_1.AssetManager.getAsset(LevelManager._registeredLevels[name]);
                LevelManager.loadLevel(asset);
            }
            else {
                Message_1.Message.subscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + LevelManager._registeredLevels[name], LevelManager.onMessage);
                AssetManager_1.AssetManager.loadAsset(LevelManager._registeredLevels[name]);
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
    static onMessage(message) {
        // TODO: one for each asset.
        if (message.code === AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json") {
            Message_1.Message.unsubscribeCallback(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED + "assets/levels/levels.json", LevelManager.onMessage);
            LevelManager.processLevelConfigAsset(message.context);
        }
        else if (message.code.indexOf(AssetManager_1.MESSAGE_ASSET_LOADER_ASSET_LOADED) !== -1) {
            console.log("Level loaded:" + message.code);
            let asset = message.context;
            LevelManager.loadLevel(asset);
        }
    }
    static loadLevel(asset) {
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
        LevelManager._activeLevel = new Level_1.Level(levelName, description);
        LevelManager._activeLevel.initialize(data);
        LevelManager._activeLevel.onActivated();
        LevelManager._activeLevel.load();
        Message_1.Message.send("LEVEL_LOADED", this);
    }
    static processLevelConfigAsset(asset) {
        let levels = asset.Data.levels;
        if (levels) {
            for (let level of levels) {
                if (level.name !== undefined && level.file !== undefined) {
                    LevelManager._registeredLevels[level.name] = String(level.file);
                }
                else {
                    throw new Error("Invalid level config file format: name or file is missing");
                }
            }
        }
        // TODO: Should only set this if ALL queued assets have loaded.
        LevelManager._configLoaded = true;
    }
}
exports.LevelManager = LevelManager;
//# sourceMappingURL=LevelManager.js.map