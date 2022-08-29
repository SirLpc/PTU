"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.MessagePriority = void 0;
const MessageBus_1 = require("./MessageBus");
/** Represents message priorities. */
var MessagePriority;
(function (MessagePriority) {
    /** Normal message priority, meaning the message is sent as soon as the queue allows. */
    MessagePriority[MessagePriority["NORMAL"] = 0] = "NORMAL";
    /** High message priority, meaning the message is sent immediately. */
    MessagePriority[MessagePriority["HIGH"] = 1] = "HIGH";
})(MessagePriority = exports.MessagePriority || (exports.MessagePriority = {}));
/** Represents a message which can be sent and processed across the system. */
class Message {
    /** The code for this message, which is subscribed to and listened for. */
    code;
    /** Free-form context data to be included with this message. */
    context;
    /** The class instance which sent this message. */
    sender;
    /** The priority of this message. */
    priority;
    /**
     * Creates a new message.
     * @param code The code for this message, which is subscribed to and listened for.
     * @param sender The class instance which sent this message.
     * @param context Free-form context data to be included with this message.
     * @param priority The priority of this message.
     */
    constructor(code, sender, context, priority = MessagePriority.NORMAL) {
        this.code = code;
        this.sender = sender;
        this.context = context;
        this.priority = priority;
    }
    /**
     * Sends a normal-priority message with the provided parameters.
     * @param code The code for this message, which is subscribed to and listened for.
     * @param sender The class instance which sent this message.
     * @param context Free-form context data to be included with this message.
     */
    static send(code, sender, context) {
        MessageBus_1.MessageBus.post(new Message(code, sender, context, MessagePriority.NORMAL));
    }
    /**
     * Sends a high-priority message with the provided parameters.
     * @param code The code for this message, which is subscribed to and listened for.
     * @param sender The class instance which sent this message.
     * @param context Free-form context data to be included with this message.
     */
    static sendPriority(code, sender, context) {
        MessageBus_1.MessageBus.post(new Message(code, sender, context, MessagePriority.HIGH));
    }
    /**
     * Subscribes the provided handler to listen for the message code provided.
     * @param code The code to listen for.
     * @param handler The message handler to be called when a message containing the provided code is sent.
     */
    static subscribe(code, handler) {
        MessageBus_1.MessageBus.addSubscription(code, handler, undefined);
    }
    /**
     * Subscribes the provided callback to listen for the message code provided.
     * @param code The code to listen for.
     * @param callback The message callback to be invoked when a message containing the provided code is sent.
     */
    static subscribeCallback(code, callback) {
        MessageBus_1.MessageBus.addSubscription(code, undefined, callback);
    }
    /**
     * Unsubscribes the provided handler from listening for the message code provided.
     * @param code The code to no longer listen for.
     * @param handler The message handler to unsubscribe.
     */
    static unsubscribe(code, handler) {
        MessageBus_1.MessageBus.removeSubscription(code, handler, undefined);
    }
    /**
     * Unsubscribes the provided callback from listening for the message code provided.
     * @param code The code to no longer listen for.
     * @param callback The message callback to unsubscribe.
     */
    static unsubscribeCallback(code, callback) {
        MessageBus_1.MessageBus.removeSubscription(code, undefined, callback);
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map