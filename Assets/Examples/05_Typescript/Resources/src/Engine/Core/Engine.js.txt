"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
const UnityJsonAssetLoader_1 = require("../CoreUnity/Assets/UnityJsonAssetLoader");
const AssetManager_1 = require("./Assets/AssetManager");
const MessageBus_1 = require("./Message/MessageBus");
const LevelManager_1 = require("./World/LevelManager");
/**
 * The main game engine class.
 * */
class Engine {
    _previousTime = 0;
    _gameWidth;
    _gameHeight;
    _isFirstUpdate = true;
    // private _renderer: Renderer;
    _game;
    /**
     * Creates a new engine.
     * @param width The width of the game in pixels.
     * @param height The height of the game in pixels.
     * */
    constructor(width, height) {
        this._gameWidth = width;
        this._gameHeight = height;
    }
    /**
     * Starts up this engine.
     * @param game The object containing game-specific logic.
     * @param elementName The name (id) of the HTML element to use as the viewport. Must be the id of a canvas element.
     * */
    start(game, elementName) {
        this._game = game;
        // let rendererViewportCreateInfo: RendererViewportCreateInfo = new RendererViewportCreateInfo();
        // rendererViewportCreateInfo.elementId = elementName;
        // rendererViewportCreateInfo.projectionType = ViewportProjectionType.PERSPECTIVE;
        // rendererViewportCreateInfo.width = this._gameWidth;
        // rendererViewportCreateInfo.height = this._gameHeight;
        // rendererViewportCreateInfo.nearClip = 0.1;
        // rendererViewportCreateInfo.farClip = 1000.0;
        // rendererViewportCreateInfo.fov = Math.degToRad( 45.0 );
        // rendererViewportCreateInfo.x = 0;
        // rendererViewportCreateInfo.y = 0;
        // this._renderer = new Renderer( rendererViewportCreateInfo );
        // console.debug( `GL_VERSION:               ${gl.getParameter( gl.VERSION )}` );
        // console.debug( `GL_VENDOR:                ${gl.getParameter( gl.VENDOR )}` );
        // console.debug( `GL_RENDERER:              ${gl.getParameter( gl.RENDERER )}` );
        // console.debug( `SHADING_LANGUAGE_VERSION: ${gl.getParameter( gl.SHADING_LANGUAGE_VERSION )}` );
        // // Attempt to load additional information.
        // const debugRendererExtension = gl.getExtension( 'WEBGL_debug_renderer_info' );
        // if ( debugRendererExtension !== undefined && debugRendererExtension !== null ) {
        //     console.debug( `UNMASKED_VENDOR_WEBGL:    ${gl.getParameter( debugRendererExtension.UNMASKED_VENDOR_WEBGL )}` );
        //     console.debug( `UNMASKED_RENDERER_WEBGL:  ${gl.getParameter( debugRendererExtension.UNMASKED_RENDERER_WEBGL )}` );
        // }
        // Initialize various sub-systems.
        AssetManager_1.AssetManager.Initialize();
        AssetManager_1.AssetManager.registerLoader(new UnityJsonAssetLoader_1.UnityJsonAssetLoader());
        // ShaderManager.Initialize();
        // InputManager.Initialize( this._renderer.windowViewportCanvas );
        // Load fonts
        // BitmapFontManager.load();
        // Load level config
        LevelManager_1.LevelManager.load();
        // Load material configs
        // MaterialManager.load();
        // Load audio. Note that this does not hold up the engine from being ready.
        // AudioManager.load();
        // Trigger a resize to make sure the viewport is corrent.
        this.resize();
        // Begin the preloading phase, which waits for various thing to be loaded before starting the game.
        this.preloading();
    }
    /**
     * Resizes the canvas to fit the window.
     * */
    resize() {
        // if ( this._renderer ) {
        //     this._renderer.OnResize();
        // }
    }
    /**
     * The main game loop.
     */
    loop() {
        if (this._isFirstUpdate) {
        }
        //TODO 这个时间有问题
        let nowTime = new Date().getUTCMilliseconds() / 1000;
        let delta = nowTime - this._previousTime;
        this.update(delta);
        this.render(delta);
        console.log(delta);
        this._previousTime = nowTime;
        //requestAnimationFrame( this.loop.bind( this ) );
    }
    preloading() {
        // Make sure to always update the message bus.
        MessageBus_1.MessageBus.update(0);
        // if ( !BitmapFontManager.isLoaded ) {
        //     requestAnimationFrame( this.preloading.bind( this ) );
        //     return;
        // }
        // if ( !MaterialManager.isLoaded ) {
        //     requestAnimationFrame( this.preloading.bind( this ) );
        //     return;
        // }
        if (!LevelManager_1.LevelManager.isLoaded) {
            //requestAnimationFrame( this.preloading.bind( this ) );
            return;
        }
        // Perform items such as loading the first/initial level, etc.
        this._game.UpdateReady();
        // Kick off the render loop.
        this.loop();
        //TODO 从unity中call
        setInterval(() => {
            this.loop();
        }, 1000);
    }
    update(delta) {
        MessageBus_1.MessageBus.update(delta);
        if (LevelManager_1.LevelManager.isLoaded && LevelManager_1.LevelManager.activeLevel !== undefined && LevelManager_1.LevelManager.activeLevel.isLoaded) {
            LevelManager_1.LevelManager.activeLevel.update(delta);
        }
        //CollisionManager.update( delta );
        this._game.Update(delta);
    }
    render(delta) {
        // this._renderer.BeginRender( delta, this._game );
        // this._renderer.EndRender();
    }
}
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map