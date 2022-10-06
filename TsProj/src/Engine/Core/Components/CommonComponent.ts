
import { UnityVector3VariableRef } from "../../CoreUnity/VariableReferences/UnityVector3VariableRef";
import { Vector3 } from "../Math/Vector3";
import { Vector3VariableRef } from "../VariableReferences/Vector3VariableRef";
import { IVariableRef } from "../VariableReferences/IVariableRef";
import { BaseBehavior } from "../Behaviors/BaseBehavior";
import { BehaviorManager } from "../Behaviors/BehaviorManager";
import { IBehavior } from "../Behaviors/IBehavior";
import { IBehaviorBuilder } from "../Behaviors/IBehaviorBuilder";
import { IBehaviorData } from "../Behaviors/IBehaviorData";
import { JsonUtility } from "../../Utility/JsonUtility";
import { IComponentData } from "./IComponentData";
import { IComponentBuilder } from "./IComponentBuilder";
import { BaseComponent } from "./BaseComponent";
import { ComponentManager } from "./ComponentManager";
import { IComponent } from "./IComponent";
import { TEntity } from "../World/TEntity";
import { CommonBehaviorData } from "../Behaviors/CommonBehavior";



    /**
     * The data for a rotation behavior.
     */
    export class CommonComponentData implements IComponentData {

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
    export abstract class CommonComponentBuilder implements IComponentBuilder {

        public constructor(private _data: ()=>CommonComponentData, private _behaviour: ()=>BaseComponent, private _behaviourManager: ComponentManager) {
            this._behaviourManager.registerBuilder(this);
        }

        public abstract get type(): string;

        public buildFromJson( json: any ): IComponent {
            let data = this._data().setFromJson( json );
            let behaviour = this._behaviour().setData( data );
            return behaviour;
        }
    }

    export abstract class CommonComponent extends BaseComponent {
        
        protected get commonData(): CommonComponentData {
            return this._data as CommonBehaviorData;
        }
   
    }

