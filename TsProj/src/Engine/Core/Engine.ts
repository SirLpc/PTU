import { UnityJsonAssetLoader } from "../CoreUnity/Assets/UnityJsonAssetLoader";
import { UnityLevelToJsonAssetLoader } from "../CoreUnity/Assets/UnityLevelToJsonAssetLoader";
import { UnityObjectComponentBuilder } from "../CoreUnity/Components/UnityObjectComponent";
import { IGame } from "../Game/IGame";
import { AssetManager } from "./Assets/AssetManager";
import { BehaviorManager } from "./Behaviors/BehaviorManager";
import { RotationBehaviorBuilder } from "./Behaviors/RotationBehavior";
import { ComponentManager } from "./Components/ComponentManager";
import { MessageBus } from "./Message/MessageBus";
import { LevelManager } from "./World/LevelManager";


    /**
     * The main game engine class.
     * */
    export class Engine {

        private _previousTime: number = 0;
        private _gameWidth: number;
        private _gameHeight: number;

        private _isFirstUpdate: boolean = true;

        // private _renderer: Renderer;
        private _game: IGame;
        private _levelManager: LevelManager;

        /**
         * Creates a new engine.
         * @param game The object containing game-specific logic.
         * @param width The width of the game in pixels.
         * @param height The height of the game in pixels.
         * */
        public constructor( game: IGame, levelManager: LevelManager, width?: number, height?: number ) {
            this._game = game;
            this._levelManager = levelManager;

            this._gameWidth = width;
            this._gameHeight = height;
        }

        /**
         * Starts up this engine.
         * @param elementName The name (id) of the HTML element to use as the viewport. Must be the id of a canvas element.
         * */
        public start( elementName?: string ): void {

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
            // AssetManager.Initialize();
            // AssetManager.registerLoader(new UnityJsonAssetLoader() );
            // AssetManager.registerLoader(new UnityLevelToJsonAssetLoader() );


            BehaviorManager.registerBuilder( new RotationBehaviorBuilder() );
            // ComponentManager.registerBuilder( new UnityObjectComponentBuilder() );

            // ShaderManager.Initialize();

            // InputManager.Initialize( this._renderer.windowViewportCanvas );

            // Load fonts
            // BitmapFontManager.load();

            // Load level config
            this._levelManager.load();

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
        public resize(): void {
            // if ( this._renderer ) {
            //     this._renderer.OnResize();
            // }
        }

        /**
         * The main game loop.
         */
        private loop(): void {
            if ( this._isFirstUpdate ) {

            }

            let nowTime = Date.now();
            let delta = nowTime - this._previousTime;

            this.update( delta );
            this.render( delta );

            this._previousTime = nowTime;

            //requestAnimationFrame( this.loop.bind( this ) );
        }

        private preloading(): void {

            // Make sure to always update the message bus.
            MessageBus.update( 0 );

            // if ( !BitmapFontManager.isLoaded ) {
            //     requestAnimationFrame( this.preloading.bind( this ) );
            //     return;
            // }

            // if ( !MaterialManager.isLoaded ) {
            //     requestAnimationFrame( this.preloading.bind( this ) );
            //     return;
            // }

            if ( !this._levelManager.isLoaded ) {
                //requestAnimationFrame( this.preloading.bind( this ) );
                return;
            }

            // Perform items such as loading the first/initial level, etc.
            this._game.UpdateReady();

            // Kick off the render loop.
            this.loop();

                
            //TODO 从unity中call
            setInterval(()=>
            {
                this.loop();
            }, 1000 / 60);

        }

        private update( delta: number ): void {

            MessageBus.update( delta );
            if ( this._levelManager.isLoaded && this._levelManager.activeLevel !== undefined && this._levelManager.activeLevel.isLoaded ) {
                this._levelManager.activeLevel.update( delta );
            }
            //CollisionManager.update( delta );

            this._game.Update( delta );
        }

        private render( delta: number ): void {
            // this._renderer.BeginRender( delta, this._game );

            // 下面是自己加到这的，不知道合理不
            if ( this._levelManager.isLoaded && this._levelManager.activeLevel !== undefined && this._levelManager.activeLevel.isLoaded ) {
                this._levelManager.activeLevel.render( );
            }

            // this._renderer.EndRender();
        }
    }