
import { ScriptableObjectArchitecture, TSEngine, UnityEngine } from "csharp";
import { BaseComponent } from "../../Core/Components/BaseComponent";
import { ComponentManager } from "../../Core/Components/ComponentManager";
import { IComponent } from "../../Core/Components/IComponent";
import { IComponentBuilder } from "../../Core/Components/IComponentBuilder";
import { IComponentData } from "../../Core/Components/IComponentData";
import { Vector3 } from "../../Core/Math/Vector3";
import { JsonUtility } from "../../Utility/JsonUtility";



    /**
     * The data for a sprite component.
     */
    export class UnityObjectComponentData implements IComponentData {
        public name: string;
        public unityGo: UnityEngine.GameObject;

        public setFromJson( json: any ): IComponentData {
            if ( json.name !== undefined ) {
                this.name = String( json.name );
            }
 
            if ( json.data !== undefined ) {
                let data = JsonUtility.TryGetArrayItmeByName(json.data, "gameObject");
                let obj = TSEngine.InstanceHUB.Get(data.refID);
                this.unityGo = (obj as ScriptableObjectArchitecture.GameObjectReference).Value;
            }
            else {
                throw new Error("UnityObjectComponentData need a data with gameObject field.")
            }
            
            return this;
        }
    }

    /**
     * The builder for a sprite component.
     */
    export class UnityObjectComponentBuilder implements IComponentBuilder {

        public constructor(private _compData: ()=>UnityObjectComponentData, private _comp: ()=>UnityObjectComponent, private _compManager: ComponentManager) {
            this._compManager.registerBuilder(this);
        }

        public get type(): string {
            return "UnityObjectComponent";
        }

        public buildFromJson( json: any ): IComponent {
            let data = this._compData().setFromJson( json );
            let comp = this._comp().setData( data );
            return comp;
        }
    }

    /**
     * A component which renders a two-dimensional image on the screen.
     */
    export class UnityObjectComponent extends BaseComponent {

        private _unityGO: UnityEngine.GameObject;
        private _pos : UnityEngine.Vector3 = new UnityEngine.Vector3();
        private _rot : UnityEngine.Vector3 = new UnityEngine.Vector3();
        private _sca : UnityEngine.Vector3 = new UnityEngine.Vector3();

        /** Loads this component. */
        public override load(): void {
            this._unityGO = (this._data as UnityObjectComponentData).unityGo;

            super.load( );
        }

        /**
         * Renders this component.
         */
        public override render( /*renderView: RenderView*/ ): void {
            this._pos.x = this.owner.transform.position.x;
            this._pos.y = this.owner.transform.position.y;
            this._pos.z = this.owner.transform.position.z;

            this._rot.x = this.owner.transform.rotation.x;
            this._rot.y = this.owner.transform.rotation.y;
            this._rot.z = this.owner.transform.rotation.z;

            this._sca.x = this.owner.transform.scale.x;
            this._sca.y = this.owner.transform.scale.y;
            this._sca.z = this.owner.transform.scale.z;



            // pos : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.position.x, this.owner.transform.position.y, this.owner.transform.position.z);
            // rot : UnityEngine.Vector3 = new UnityEngine.Vector3(this.owner.transform.rotation.x, this.owner.transform.rotation.y, this.owner.transform.rotation.z);
            // scal = new UnityEngine.Vector3(this.owner.transform.scale.x, this.owner.transform.scale.y, this.owner.transform.scale.z);
            this._unityGO.transform.localPosition = this._pos;
            this._unityGO.transform.localEulerAngles = this._rot;
            this._unityGO.transform.localScale = this._sca;

            super.render( );
        }
    }

