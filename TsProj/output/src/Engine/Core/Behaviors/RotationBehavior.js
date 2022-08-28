/// <reference path="BaseBehavior.ts" />
/// <reference path="BehaviorManager.ts" />
var NT;
(function (NT) {
    /**
     * The data for a rotation behavior.
     */
    class RotationBehaviorData {
        /** The name of the behavior. */
        name;
        /** The rotation amounts to be added per update. */
        rotation = NT.Vector3.zero;
        /**
         * Sets the properties of this data from the provided json.
         * @param json The json to set from.
         */
        setFromJson(json) {
            if (json.name === undefined) {
                throw new Error("Name must be defined in behavior data.");
            }
            this.name = String(json.name);
            if (json.rotation !== undefined) {
                this.rotation.setFromJson(json.rotation);
            }
        }
    }
    NT.RotationBehaviorData = RotationBehaviorData;
    /** The builder for a rotation behavior. */
    class RotationBehaviorBuilder {
        get type() {
            return "rotation";
        }
        buildFromJson(json) {
            let data = new RotationBehaviorData();
            data.setFromJson(json);
            return new RotationBehavior(data);
        }
    }
    NT.RotationBehaviorBuilder = RotationBehaviorBuilder;
    /**
     * A behavior which continuously rotates the object to which it is attached by the
     * configured amount.
     */
    class RotationBehavior extends NT.BaseBehavior {
        _rotation;
        /**
         * Creates a new RotationBehavior.
         * @param data The data for this behavior.
         */
        constructor(data) {
            super(data);
            this._rotation = data.rotation;
        }
        /**
         * Performs update procedures on this behavior.
         * @param time The time in milliseconds since the last update.
         */
        update(time) {
            this._owner.transform.rotation.add(this._rotation);
            super.update(time);
        }
    }
    NT.RotationBehavior = RotationBehavior;
    NT.BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
})(NT || (NT = {}));
//# sourceMappingURL=RotationBehavior.js.map