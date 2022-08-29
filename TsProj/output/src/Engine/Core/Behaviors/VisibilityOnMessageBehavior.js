"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityOnMessageBehavior = exports.VisibilityOnMessageBehaviorBuilder = exports.VisibilityOnMessageBehaviorData = void 0;
const Message_1 = require("../Message/Message");
const BaseBehavior_1 = require("./BaseBehavior");
const BehaviorManager_1 = require("./BehaviorManager");
class VisibilityOnMessageBehaviorData {
    name;
    messageCode;
    visible;
    setFromJson(json) {
        if (json.messageCode === undefined) {
            throw new Error("VisibilityOnMessageBehaviorData requires 'messageCode' to be defined.");
        }
        else {
            this.messageCode = String(json.messageCode);
        }
        if (json.visible === undefined) {
            throw new Error("VisibilityOnMessageBehaviorData requires 'visible' to be defined.");
        }
        else {
            this.visible = Boolean(json.visible);
        }
    }
}
exports.VisibilityOnMessageBehaviorData = VisibilityOnMessageBehaviorData;
class VisibilityOnMessageBehaviorBuilder {
    get type() {
        return "visibilityOnMessage";
    }
    buildFromJson(json) {
        let data = new VisibilityOnMessageBehaviorData();
        data.setFromJson(json);
        return new VisibilityOnMessageBehavior(data);
    }
}
exports.VisibilityOnMessageBehaviorBuilder = VisibilityOnMessageBehaviorBuilder;
/**
 * A behavior which enables or disables visibility when the configured message is recieved.
 */
class VisibilityOnMessageBehavior extends BaseBehavior_1.BaseBehavior {
    _messageCode;
    _visible;
    /**
     * Creates a new VisibilityOnMessageBehavior.
     * @param data The data for this behavior.
     */
    constructor(data) {
        super(data);
        this._messageCode = data.messageCode;
        this._visible = data.visible;
        Message_1.Message.subscribe(this._messageCode, this);
    }
    /**
     * The message handler.
     * @param message The message to be handled.
     */
    onMessage(message) {
        if (message.code === this._messageCode) {
            this._owner.isVisible = this._visible;
        }
    }
}
exports.VisibilityOnMessageBehavior = VisibilityOnMessageBehavior;
BehaviorManager_1.BehaviorManager.registerBuilder(new VisibilityOnMessageBehaviorBuilder());
//# sourceMappingURL=VisibilityOnMessageBehavior.js.map