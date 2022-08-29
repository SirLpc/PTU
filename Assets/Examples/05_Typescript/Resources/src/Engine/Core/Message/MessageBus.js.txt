"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBus = void 0;
const Message_1 = require("./Message");
const MessageSubscriptionNode_1 = require("./MessageSubscriptionNode");
/** The message manager responsible for sending messages across the system. */
class MessageBus {
    static _subscriptions = {};
    static _normalQueueMessagePerUpdate = 10;
    static _normalMessageQueue = [];
    /** Constructor hidden to prevent instantiation. */
    constructor() {
    }
    /**
     * Adds a subscription to the provided code using the provided handler.
     * @param code The code to listen for.
     * @param handler The handler to be subscribed.
     */
    static addSubscription(code, handler, callback) {
        if (MessageBus._subscriptions[code] === undefined) {
            MessageBus._subscriptions[code] = [];
        }
        let matches = [];
        if (handler !== undefined) {
            matches = MessageBus._subscriptions[code].filter(x => x.handler === handler);
        }
        else if (callback !== undefined) {
            matches = MessageBus._subscriptions[code].filter(x => x.callback === callback);
        }
        else {
            console.warn("Cannot add subscription where both the handler and callback are undefined.");
            return;
        }
        if (matches.length === 0) {
            let node = new MessageSubscriptionNode_1.MessageSubscriptionNode(code, handler, callback);
            MessageBus._subscriptions[code].push(node);
        }
        else {
            console.warn("Attempting to add a duplicate handler/callback to code: " + code + ". Subscription not added.");
        }
    }
    /**
     * Removes a subscription to the provided code using the provided handler.
     * @param code The code to no longer listen for.
     * @param handler The handler to be unsubscribed.
     */
    static removeSubscription(code, handler, callback) {
        if (MessageBus._subscriptions[code] === undefined) {
            console.warn("Cannot unsubscribe handler from code: " + code + " Because that code is not subscribed to.");
            return;
        }
        let matches = [];
        if (handler !== undefined) {
            matches = MessageBus._subscriptions[code].filter(x => x.handler === handler);
        }
        else if (callback !== undefined) {
            matches = MessageBus._subscriptions[code].filter(x => x.callback === callback);
        }
        else {
            console.warn("Cannot remove subscription where both the handler and callback are undefined.");
            return;
        }
        for (let match of matches) {
            let nodeIndex = MessageBus._subscriptions[code].indexOf(match);
            if (nodeIndex !== -1) {
                MessageBus._subscriptions[code].splice(nodeIndex, 1);
            }
        }
    }
    /**
     * Posts the provided message to the message system.
     * @param message The message to be sent.
     */
    static post(message) {
        console.log("Message posted:", message);
        let handlers = MessageBus._subscriptions[message.code];
        if (handlers === undefined) {
            return;
        }
        for (let h of handlers) {
            if (message.priority === Message_1.MessagePriority.HIGH) {
                if (h.handler !== undefined) {
                    h.handler.onMessage(message);
                }
                else {
                    if (h.callback !== undefined) {
                        h.callback(message);
                    }
                    else {
                        // NOTE: Technically shouldn't be possible, but...
                        console.log("There is no hander OR callback for message code: " + message.code);
                    }
                }
            }
            else {
                MessageBus._normalMessageQueue.push(new MessageSubscriptionNode_1.MessageQueueNode(message, h.handler, h.callback));
            }
        }
    }
    /**
     * Performs update routines on this message bus.
     * @param time The delta time in milliseconds since the last update.
     */
    static update(time) {
        if (MessageBus._normalMessageQueue.length === 0) {
            return;
        }
        let messageLimit = Math.min(MessageBus._normalQueueMessagePerUpdate, MessageBus._normalMessageQueue.length);
        for (let i = 0; i < messageLimit; ++i) {
            let node = MessageBus._normalMessageQueue.pop();
            if (node.handler !== undefined) {
                node.handler.onMessage(node.message);
            }
            else if (node.callback !== undefined) {
                node.callback(node.message);
            }
            else {
                console.warn("Unable to process message node because there is no handler or callback: " + node);
            }
        }
    }
}
exports.MessageBus = MessageBus;
//# sourceMappingURL=MessageBus.js.map