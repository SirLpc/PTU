
import { UnityVector3VariableRef } from "../../CoreUnity/VariableReferences/UnityVector3VariableRef";
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
    export class CommonBehaviorData implements IBehaviorData {

        /** The name of the behavior. */
        public name: string;
        public data: any;

        /**
         * Sets the properties of this data from the provided json.
         * @param json The json to set from.
         */
        public setFromJson( json: any ): IBehaviorData {
            if ( json.name === undefined ) {
                throw new Error( "Name must be defined in behavior data." );
            }

            this.name = String( json.name );
            this.data = json.data;
            return this;
        }

        public injectField<T>(variable: IVariableRef<T>, fieldName: string): void {
            let fieldData = JsonUtility.TryGetArrayItmeByName(this.data, fieldName);
            variable.inject( fieldData );
        }
    }

    /** The builder for a rotation behavior. */
    export abstract class CommonBehaviorBuilder implements IBehaviorBuilder {

        public constructor(private _data: ()=>CommonBehaviorData, private _behaviour: ()=>BaseBehavior, private _behaviourManager: BehaviorManager) {
            this._behaviourManager.registerBuilder(this);
        }

        public abstract get type(): string;

        public buildFromJson( json: any ): IBehavior {
            let data = this._data().setFromJson( json );
            let behaviour = this._behaviour().apply( data );
            return behaviour;
        }
    }



