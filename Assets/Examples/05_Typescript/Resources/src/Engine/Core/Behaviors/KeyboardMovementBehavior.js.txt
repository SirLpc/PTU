/// <reference path="BaseBehavior.ts" />
/// <reference path="BehaviorManager.ts" />
var NT;
(function (NT) {
    /**
     * Represents the data used to configure this behavior.
     */
    class KeyboardMovementBehaviorData {
        /**
         * The name of this behavior.
         */
        name;
        /**
         * The movement speed to be applied when a key is held down. Default: 0.1
         */
        speed = 0.1;
        /**
         * Sets the properties of this data from the provided JSON.
         * @param json The json to set from.
         */
        setFromJson(json) {
            if (json.name === undefined) {
                throw new Error("Name must be defined in behavior data.");
            }
            this.name = String(json.name);
            if (json.speed !== undefined) {
                this.speed = Number(json.speed);
            }
        }
    }
    NT.KeyboardMovementBehaviorData = KeyboardMovementBehaviorData;
    /**
     * The builder for a KeyboardMovement behavior.
     */
    class KeyboardMovementBehaviorBuilder {
        /**
         * The behavior type.
         */
        get type() {
            return "keyboardMovement";
        }
        /**
         * Builds a behavior from the provided json.
         * @param json The json to build from.
         */
        buildFromJson(json) {
            let data = new KeyboardMovementBehaviorData();
            data.setFromJson(json);
            return new KeyboardMovementBehavior(data);
        }
    }
    NT.KeyboardMovementBehaviorBuilder = KeyboardMovementBehaviorBuilder;
    /**
     * A behavior which, when a key is held down, moves the object to which it is attached
     * at the rate of the configured speed.
     */
    class KeyboardMovementBehavior extends NT.BaseBehavior {
        /**
         * The speed a which to move.
         */
        speed = 0.1;
        /**
         * Creates a new KeyboardMovementBehavior.
         * @param data The data for this behavior.
         */
        constructor(data) {
            super(data);
            this.speed = data.speed;
        }
        /**
         * Performs update procedures on this component.
         * @param time The delta time in milliseconds since the last update.
         */
        update(time) {
            if (NT.InputManager.isKeyDown(NT.Keys.LEFT)) {
                this._owner.transform.position.x -= this.speed;
            }
            if (NT.InputManager.isKeyDown(NT.Keys.RIGHT)) {
                this._owner.transform.position.x += this.speed;
            }
            if (NT.InputManager.isKeyDown(NT.Keys.UP)) {
                this._owner.transform.position.y -= this.speed;
            }
            if (NT.InputManager.isKeyDown(NT.Keys.DOWN)) {
                this._owner.transform.position.y += this.speed;
            }
            super.update(time);
        }
    }
    NT.KeyboardMovementBehavior = KeyboardMovementBehavior;
    // Auto-registers the builder.
    NT.BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());
})(NT || (NT = {}));
//# sourceMappingURL=KeyboardMovementBehavior.js.map