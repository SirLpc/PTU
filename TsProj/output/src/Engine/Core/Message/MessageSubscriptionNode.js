var NT;
(function (NT) {
    /**
     * Represents a subscription to a message and holds a handler pointer.
     */
    class MessageSubscriptionNode {
        /**
         * The message code being subscribed to.
         */
        code;
        /**
         * The message handler.
         */
        handler;
        /**
         * A callback to be made for handlers which do not use the interface.
         */
        callback;
        /**
         * Creates a new MessageSubscriptionNode.
         * @param code The message code being subscribed to.
         * @param handler The message handler.
         * @param callback The message callback.
         */
        constructor(code, handler, callback) {
            this.code = code;
            this.handler = handler;
            this.callback = callback;
        }
    }
    NT.MessageSubscriptionNode = MessageSubscriptionNode;
    /**
     * Represents a queued message with a handler pointer and/or callback.
     */
    class MessageQueueNode {
        /**
         * The message code being subscribed to.
         */
        message;
        /**
         * The message handler.
         */
        handler;
        /**
         * A callback to be made for handlers which do not use the interface.
         */
        callback;
        /**
         * Creates a new MessageSubscriptionNode.
         * @param message The message code being subscribed to.
         * @param handler The message handler.
         * @param callback The message callback.
         */
        constructor(message, handler, callback) {
            this.message = message;
            this.handler = handler;
            this.callback = callback;
        }
    }
    NT.MessageQueueNode = MessageQueueNode;
})(NT || (NT = {}));
//# sourceMappingURL=MessageSubscriptionNode.js.map