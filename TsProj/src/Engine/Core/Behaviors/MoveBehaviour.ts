
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
import { CommonBehaviorBuilder, CommonBehaviorData } from "./CommonBehavior";
import { CommonComponentBuilder } from "../Components/CommonComponent";
import { BaseBehaviorComponent } from "./BaseBehaviorComponent";


    /** The builder for a rotation behavior. */
    export class MoveBehaviorBuilder extends CommonComponentBuilder {
        public get type(): string {
            return "move";
        }
    }

    /**
     * A behavior which continuously rotates the object to which it is attached by the
     * configured amount.
     */
    export class MoveBehaviour extends BaseBehaviorComponent {

        constructor(private _position: IVariableRef<Vector3>) {
            super();
        }

        public override load(): void {
            this.commonData.injectField(this._position, "position");
            super.load();
        }


        /**
         * Performs update procedures on this behavior.
         * @param time The time in milliseconds since the last update.
         */
        public override update( time: number ): void {
            this._owner.transform.position.add( this._position.value );

            super.update( time );
        }
    }

