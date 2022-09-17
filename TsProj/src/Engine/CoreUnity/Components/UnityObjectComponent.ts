
import { UnityEngine } from "csharp";
import { BaseComponent } from "../../Core/Components/BaseComponent";
import { ComponentManager } from "../../Core/Components/ComponentManager";
import { IComponent } from "../../Core/Components/IComponent";
import { IComponentBuilder } from "../../Core/Components/IComponentBuilder";
import { IComponentData } from "../../Core/Components/IComponentData";



    /**
     * The data for a sprite component.
     */
    export class UnityObjectComponentData implements IComponentData {
        public name: string;

        public setFromJson( json: any ): void {
            if ( json.name !== undefined ) {
                this.name = String( json.name );
            }
        }
    }

    /**
     * The builder for a sprite component.
     */
    export class UnityObjectComponentBuilder implements IComponentBuilder {

        public constructor(private _compData: UnityObjectComponentData, private _comp: UnityObjectComponent, private _compManager: ComponentManager) {
            this._compManager.registerBuilder(this);
        }

        public get type(): string {
            return "UnityObjectComponent";
        }

        public buildFromJson( json: any ): IComponent {
            this._compData.setFromJson( json );
            this._comp.setData( this._compData );
            return this._comp;
        }
    }

    /**
     * A component which renders a two-dimensional image on the screen.
     */
    export class UnityObjectComponent extends BaseComponent {

        private _instanceID: number;
        private _unityGO: UnityEngine.GameObject;

        /** Loads this component. */
        public override load(): void {
            this._unityGO = UnityEngine.GameObject.Find(this.owner.name);

            super.load( );
        }

        /**
         * Renders this component.
         */
        public override render( /*renderView: RenderView*/ ): void {
            let pos : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z);
            let rot : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.rotation.x, this.owner.transform.rotation.y, this.owner.transform.rotation.z);
            let scale : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.scale.x, this.owner.transform.scale.y, this.owner.transform.scale.z);
            this._unityGO.transform.localPosition = pos;
            this._unityGO.transform.localEulerAngles = rot;
            this._unityGO.transform.localScale = scale;

            super.render( );
        }
    }

