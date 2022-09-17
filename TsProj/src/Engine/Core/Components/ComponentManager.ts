import { IComponent } from "./IComponent";
import { IComponentBuilder } from "./IComponentBuilder";


    /**
     * Manages components and their creation.
     */
    export class ComponentManager {

        private _registeredBuilders: { [type: string]: IComponentBuilder } = {};

        /**
         * Registers the provided builder.
         * @param builder The builder to register.
         */
        public registerBuilder( builder: IComponentBuilder ): void {
            this._registeredBuilders[builder.type] = builder;
        }

        /**
         * Extracts a component from the provided json.
         * @param json The json to extract from.
         */
        public extractComponent( json: any ): IComponent {
            if ( json.type !== undefined ) {
                if ( this._registeredBuilders[String( json.type )] !== undefined ) {
                    return this._registeredBuilders[String( json.type )].buildFromJson( json );
                }

                throw new Error( "Behavior manager error - type is missing or builder is not registered for this type: " + json.type );
            }
        }
    }