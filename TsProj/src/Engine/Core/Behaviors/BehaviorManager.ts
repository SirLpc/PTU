import { IBehavior } from "./IBehavior";
import { IBehaviorBuilder } from "./IBehaviorBuilder";


    /**
     * Manages behaviors in the system.
     */
    export class BehaviorManager {
        private _registeredBuilders: { [type: string]: IBehaviorBuilder } = {};

        /**
         * Registers a given builder with this manager.
         * @param builder The builder to be registered.
         */
        public registerBuilder( builder: IBehaviorBuilder ): void {
            this._registeredBuilders[builder.type] = builder;
        }

        /**
         * Attempts to extract a behavior from the provided json.
         * @param json The json to extract a behavior from.
         */
        public extractBehavior( json: any ): IBehavior {
            if ( json.type !== undefined ) {
                if ( this._registeredBuilders[String( json.type )] !== undefined ) {
                    return this._registeredBuilders[String( json.type )].buildFromJson( json );
                }

                throw new Error( "Behavior manager error - type is missing or builder is not registered for this type: " + json.type );
            }
        }
    }