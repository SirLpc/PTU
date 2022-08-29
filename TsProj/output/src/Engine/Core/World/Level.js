"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = exports.LevelState = void 0;
const BehaviorManager_1 = require("../Behaviors/BehaviorManager");
const ComponentManager_1 = require("../Components/ComponentManager");
const SceneGraph_1 = require("./SceneGraph");
const TEntity_1 = require("./TEntity");
/**
 * Represents the basic level state.
 */
var LevelState;
(function (LevelState) {
    /** The level is not yet initialized. */
    LevelState[LevelState["UNINITIALIZED"] = 0] = "UNINITIALIZED";
    /** The level is currently loading. */
    LevelState[LevelState["LOADING"] = 1] = "LOADING";
    /** The level is loaded and is currently updating. */
    LevelState[LevelState["UPDATING"] = 2] = "UPDATING";
})(LevelState = exports.LevelState || (exports.LevelState = {}));
/**
 * Represents a single level in the world. Levels are loaded and unloaded as the player
 * progresses through the game. An open world would be achieved by overriding this class
 * and adding/removing objects dynamically based on player position, etc.
 */
class Level {
    _name;
    _description;
    _sceneGraph;
    _state = LevelState.UNINITIALIZED;
    // private _registeredCameras: Dictionary<BaseCamera> = {};
    // private _activeCamera: BaseCamera;
    _defaultCameraName;
    /**
     * Creates a new level.
     * @param name The name of this level.
     * @param description A brief description of this level.
     * Could be used on level selection screens for some games.
     */
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._sceneGraph = new SceneGraph_1.SceneGraph();
    }
    /** The name of this level. */
    get name() {
        return this._name;
    }
    /** The description of this level. */
    get description() {
        return this._description;
    }
    /** The SceneGraph of this level. */
    get sceneGraph() {
        return this._sceneGraph;
    }
    /** The currently active camera. */
    // public get activeCamera(): BaseCamera {
    //     return this._activeCamera;
    // }
    /** Indicates if this level is loaded. */
    get isLoaded() {
        return this._state === LevelState.UPDATING;
    }
    /**
     * Performs initialization routines on this level.
     * @param jsonData The JSON-formatted data to initialize this level with.
     */
    initialize(jsonData) {
        if (jsonData.objects === undefined) {
            throw new Error("Zone initialization error: objects not present.");
        }
        if (jsonData.defaultCamera !== undefined) {
            this._defaultCameraName = String(jsonData.defaultCamera);
        }
        for (let o in jsonData.objects) {
            let obj = jsonData.objects[o];
            this.loadEntity(obj, this._sceneGraph.root);
        }
    }
    /** Loads this level. */
    load() {
        this._state = LevelState.LOADING;
        this._sceneGraph.load();
        this._sceneGraph.root.updateReady();
        // Get registered cameras. If there aren't any, register one automatically.
        // Otherwise, look for the first one and make it active.
        // TODO: Add active camera to level config, assign by name.
        // if ( this._defaultCameraName !== undefined ) {
        //     let obj = this._sceneGraph.getEntityByName( this._defaultCameraName );
        //     if ( obj === undefined ) {
        //         throw new Error( "Default camera not found:" + this._defaultCameraName );
        //     } else {
        //         // NOTE: If detected, the camera should already be registered at this point.
        //     }
        // } else {
        //     let cameraKeys = Object.keys( this._registeredCameras );
        //     if ( cameraKeys.length > 0 ) {
        //         this._activeCamera = this._registeredCameras[cameraKeys[0]];
        //     } else {
        //         let defaultCamera = new PerspectiveCamera( "DEFAULT_CAMERA", this._sceneGraph );
        //         this._sceneGraph.addObject( defaultCamera );
        //         this.registerCamera( defaultCamera );
        //         this._activeCamera = defaultCamera;
        //     }
        // }
        this._state = LevelState.UPDATING;
    }
    /** Unloads this level. */
    unload() {
    }
    /**
     * Updates this level.
     * @param time The delta time in milliseconds since the last update.
     */
    update(time) {
        if (this._state === LevelState.UPDATING) {
            this._sceneGraph.update(time);
        }
    }
    /**
     * Renders this level.
     */
    // public render( renderView: RenderView ): void {
    render() {
        if (this._state === LevelState.UPDATING) {
            this._sceneGraph.render();
        }
    }
    /** Called when this level is activated. */
    onActivated() {
    }
    /** Called when this level is deactivated. */
    onDeactivated() {
    }
    /**
     * Registers the provided camera with this level. Automatically sets as the active camera
     * if no active camera is currently set.
     * @param camera The camera to register.
     */
    // public registerCamera( camera: BaseCamera ): void {
    //     if ( this._registeredCameras[camera.name] === undefined ) {
    //         this._registeredCameras[camera.name] = camera;
    //         if ( this._activeCamera === undefined ) {
    //             this._activeCamera = camera;
    //         }
    //     } else {
    //         console.warn( "A camera named '" + camera.name + "' has already been registered. New camera not registered." );
    //     }
    // }
    /**
     * Unregisters the provided camera with this level.
     * @param camera The camera to unregister.
     */
    // public unregisterCamera( camera: BaseCamera ): void {
    //     if ( this._registeredCameras[camera.name] !== undefined ) {
    //         this._registeredCameras[camera.name] = undefined;
    //         if ( this._activeCamera === camera ) {
    //             // NOTE: auto-activate the next camera in line?
    //             this._activeCamera = undefined;
    //         }
    //     } else {
    //         console.warn( "No camera named '" + camera.name + "' hsd been registered. Camera not unregistered." );
    //     }
    // }
    /**
     * Loads an ertity using the data section provided. Attaches to the provided parent.
     * @param dataSection The data section to load from.
     * @param parent The parent object to attach to.
     */
    loadEntity(dataSection, parent) {
        let name;
        if (dataSection.name !== undefined) {
            name = String(dataSection.name);
        }
        let entity;
        // TODO: Use factories
        if (dataSection.type !== undefined) {
            if (dataSection.type = "perspectiveCamera") {
                // entity = new PerspectiveCamera( name, this._sceneGraph );
                // this.registerCamera( entity as BaseCamera );
            }
            else {
                throw new Error("Unsupported type " + dataSection.type);
            }
        }
        else {
            entity = new TEntity_1.TEntity(name, this._sceneGraph);
        }
        if (dataSection.transform !== undefined) {
            entity.transform.setFromJson(dataSection.transform);
        }
        if (dataSection.components !== undefined) {
            for (let c in dataSection.components) {
                let data = dataSection.components[c];
                let component = ComponentManager_1.ComponentManager.extractComponent(data);
                entity.addComponent(component);
            }
        }
        if (dataSection.behaviors !== undefined) {
            for (let b in dataSection.behaviors) {
                let data = dataSection.behaviors[b];
                let behavior = BehaviorManager_1.BehaviorManager.extractBehavior(data);
                entity.addBehavior(behavior);
            }
        }
        if (dataSection.children !== undefined) {
            for (let o in dataSection.children) {
                let obj = dataSection.children[o];
                this.loadEntity(obj, entity);
            }
        }
        if (parent !== undefined) {
            parent.addChild(entity);
        }
    }
}
exports.Level = Level;
//# sourceMappingURL=Level.js.map