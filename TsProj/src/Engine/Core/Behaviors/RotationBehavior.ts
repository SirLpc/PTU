
import { Vector3VariableReference } from "../../CoreUnity/VariableReferences/UnityVector3VariableRef";
import { Vector3 } from "../Math/Vector3";
import { Vector3VariableRef } from "../VariableReferences/Vector3VariableRef";
import { IVariableRef } from "../VariableReferences/IVariableRef";
import { BaseBehavior } from "./BaseBehavior";
import { BehaviorManager } from "./BehaviorManager";
import { IBehavior } from "./IBehavior";
import { IBehaviorBuilder } from "./IBehaviorBuilder";
import { IBehaviorData } from "./IBehaviorData";
import { JsonUtility } from "../../Utility/JsonUtility";



    /**
     * The data for a rotation behavior.
     */
    export class RotationBehaviorData implements IBehaviorData {

        /** The name of the behavior. */
        public name: string;

        /** The rotation amounts to be added per update. */
        public rotation: IVariableRef<Vector3>;

        public constructor(rotation: IVariableRef<Vector3>) {
            this.rotation = rotation;
        }

        /**
         * Sets the properties of this data from the provided json.
         * @param json The json to set from.
         */
        public setFromJson( json: any ): IBehaviorData {
            if ( json.name === undefined ) {
                throw new Error( "Name must be defined in behavior data." );
            }

            this.name = String( json.name );

            if ( json.data !== undefined ) {
                let rotData = JsonUtility.TryGetArrayItmeByName(json.data, "rotation");
                this.rotation.inject( rotData );
            }
            else {
                throw new Error("RotationBehaviour need a data with rotation field.")
            }
            
            return this;
        }
    }

    /** The builder for a rotation behavior. */
    export class RotationBehaviorBuilder implements IBehaviorBuilder {

        public constructor(private _data: ()=>RotationBehaviorData, private _behaviour: ()=>RotationBehavior, private _behaviourManager: BehaviorManager) {
            this._behaviourManager.registerBuilder(this);
        }

        public get type(): string {
            return "rotation";
        }

        public buildFromJson( json: any ): IBehavior {
            let data = this._data().setFromJson( json );
            let behaviour = this._behaviour().apply( data );
            return behaviour;
        }
    }

    /**
     * A behavior which continuously rotates the object to which it is attached by the
     * configured amount.
     */
    export class RotationBehavior extends BaseBehavior {

        private _rotation: IVariableRef<Vector3>;

        /**
         * Apply data on RotationBehavior.
         * @param data The data for this behavior.
         */
        public override apply(userData: any): BaseBehavior {
            this._rotation = userData.rotation;
            return this;
        }

        /**
         * Performs update procedures on this behavior.
         * @param time The time in milliseconds since the last update.
         */
        public override update( time: number ): void {
            this._owner.transform.rotation.add( this._rotation.value );

            super.update( time );
        }
    }

