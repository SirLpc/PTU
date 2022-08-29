"use strict";
/// <reference path="../Math/Vector2.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputManager = exports.MouseContext = exports.Keys = exports.MESSAGE_MOUSE_UP = exports.MESSAGE_MOUSE_DOWN = void 0;
const Vector2_1 = require("../Math/Vector2");
const Message_1 = require("../Message/Message");
/** The message code for mouse down events. */
exports.MESSAGE_MOUSE_DOWN = "MOUSE_DOWN";
/** The message code for mouse up events. */
exports.MESSAGE_MOUSE_UP = "MOUSE_UP";
/** Defines key codes for keyboard keys. */
var Keys;
(function (Keys) {
    /** The left arrow key */
    Keys[Keys["LEFT"] = 37] = "LEFT";
    /** The up arrow key */
    Keys[Keys["UP"] = 38] = "UP";
    /** The right arrow key */
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    /** The down arrow key */
    Keys[Keys["DOWN"] = 40] = "DOWN";
})(Keys = exports.Keys || (exports.Keys = {}));
/** Contains mouse state data to be used throughout the engine. */
class MouseContext {
    /** Indicates if the left mouse button is down. Default: false. */
    leftDown;
    /** Indicates if the right mouse button is down. Default: false. */
    rightDown;
    /** The mouse position. */
    position;
    constructor(leftDown = false, rightDown = false, position) {
        this.leftDown = leftDown;
        this.rightDown = rightDown;
        this.position = position;
    }
}
exports.MouseContext = MouseContext;
/** Manages all input from devices such as the mouse and keyboard. */
class InputManager {
    static _keys = [];
    static _previousMouseX;
    static _previousMouseY;
    static _mouseX;
    static _mouseY;
    static _leftDown = false;
    static _rightDown = false;
    static _resolutionScale = Vector2_1.Vector2.one;
    /**
     * Initializes the input manager.
     * @param viewport The canvas element to attach input events to
     */
    static Initialize(viewport) {
        for (let i = 0; i < 255; ++i) {
            InputManager._keys[i] = false;
        }
        window.addEventListener("keydown", InputManager.onKeyDown);
        window.addEventListener("keyup", InputManager.onKeyUp);
        viewport.addEventListener("mousemove", InputManager.onMouseMove);
        viewport.addEventListener("mousedown", InputManager.onMouseDown);
        viewport.addEventListener("mouseup", InputManager.onMouseUp);
    }
    /**
     * Indicates if the provided key is currently down.
     * @param key The key to check.
     */
    static isKeyDown(key) {
        return InputManager._keys[key];
    }
    /** Gets the current mouse position. */
    static getMousePosition() {
        return new Vector2_1.Vector2(this._mouseX, this._mouseY);
    }
    /** Gets the current mouse position. */
    static getPreviousMousePosition() {
        return new Vector2_1.Vector2(this._previousMouseX, this._previousMouseY);
    }
    /**
     * Sets the resolution scale, which is a ratio of the window width and height
     * versus the viewport canvas width and height.
     * @param scale The scale to set.
     */
    static setResolutionScale(scale) {
        InputManager._resolutionScale.copyFrom(scale);
    }
    static onKeyDown(event) {
        InputManager._keys[event.keyCode] = true;
        return true;
    }
    static onKeyUp(event) {
        InputManager._keys[event.keyCode] = false;
        return true;
    }
    static onMouseMove(event) {
        InputManager._previousMouseX = InputManager._mouseX;
        InputManager._previousMouseY = InputManager._mouseY;
        let rect = event.target.getBoundingClientRect();
        InputManager._mouseX = (event.clientX - Math.round(rect.left)) * (1 / InputManager._resolutionScale.x);
        InputManager._mouseY = (event.clientY - Math.round(rect.top)) * (1 / InputManager._resolutionScale.y);
    }
    static onMouseDown(event) {
        if (event.button === 0) {
            this._leftDown = true;
        }
        else if (event.button === 2) {
            this._rightDown = true;
        }
        Message_1.Message.send(exports.MESSAGE_MOUSE_DOWN, this, new MouseContext(InputManager._leftDown, InputManager._rightDown, InputManager.getMousePosition()));
    }
    static onMouseUp(event) {
        if (event.button === 0) {
            this._leftDown = false;
        }
        else if (event.button === 2) {
            this._rightDown = false;
        }
        Message_1.Message.send(exports.MESSAGE_MOUSE_UP, this, new MouseContext(InputManager._leftDown, InputManager._rightDown, InputManager.getMousePosition()));
    }
}
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map