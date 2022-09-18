"use strict";
/// <reference path="BaseBehavior.ts" />
/// <reference path="BehaviorManager.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseClickBehavior = exports.MouseClickBehaviorBuilder = exports.MouseClickBehaviorData = void 0;
const InputManager_1 = require("../Input/InputManager");
const Message_1 = require("../Message/Message");
const BaseBehavior_1 = require("./BaseBehavior");
/**
 * The data for a mouse click behavior.
 */
class MouseClickBehaviorData {
    /** The name of this behavior. */
    name;
    /** The width of the area to be registered as a click, relative to the TEntity to which this is attached. */
    width;
    /** The height of the area to be registered as a click, relative to the TEntity to which this is attached. */
    height;
    /** The message code to be sent when a click is detected. */
    messageCode;
    /**
     * Sets this data from the provided json.
     * @param json The json to set from.
     */
    setFromJson(json) {
        if (json.name === undefined) {
            throw new Error("Name must be defined in behavior data.");
        }
        this.name = String(json.name);
        if (json.width === undefined) {
            throw new Error("width must be defined in behavior data.");
        }
        else {
            this.width = Number(json.width);
        }
        if (json.height === undefined) {
            throw new Error("height must be defined in behavior data.");
        }
        else {
            this.height = Number(json.height);
        }
        if (json.messageCode === undefined) {
            throw new Error("messageCode must be defined in behavior data.");
        }
        else {
            this.messageCode = String(json.messageCode);
        }
        return this;
    }
}
exports.MouseClickBehaviorData = MouseClickBehaviorData;
/**
 * The builder for a MouseClick behavior.
 */
class MouseClickBehaviorBuilder {
    get type() {
        return "mouseClick";
    }
    buildFromJson(json) {
        let data = new MouseClickBehaviorData();
        data.setFromJson(json);
        return new MouseClickBehavior().apply(data);
    }
}
exports.MouseClickBehaviorBuilder = MouseClickBehaviorBuilder;
/**
 * A behavior which detects clicks within a given width and height, relative to the
 * position of the object to which it is attached. When clicked, a message with the
 * configured message code is sent.
 */
class MouseClickBehavior extends BaseBehavior_1.BaseBehavior {
    _width;
    _height;
    _messageCode;
    /**
     * Creates a new MouseClickBehavior.
     * @param data The data for this behavior.
     */
    apply(data) {
        this._width = data.width;
        this._height = data.height;
        this._messageCode = data.messageCode;
        Message_1.Message.subscribe(InputManager_1.MESSAGE_MOUSE_UP, this);
        return this;
    }
    /**
     * The message handler.
     * @param message The message to be handled.
     */
    onMessage(message) {
        if (message.code === InputManager_1.MESSAGE_MOUSE_UP) {
            if (!this._owner.isVisible) {
                return;
            }
            let context = message.context;
            let worldPos = this._owner.getWorldPosition();
            let extentsX = worldPos.x + this._width;
            let extentsY = worldPos.y + this._height;
            if (context.position.x >= worldPos.x && context.position.x <= extentsX &&
                context.position.y >= worldPos.y && context.position.y <= extentsY) {
                // Send the c onfigured message. 
                Message_1.Message.send(this._messageCode, this);
            }
        }
    }
}
exports.MouseClickBehavior = MouseClickBehavior;
//# sourceMappingURL=MouseClickBehavior.js.map