
import { ScriptableObjectArchitecture, TSEngine, UnityEngine } from "csharp";
import { BaseComponent } from "../../Core/Components/BaseComponent";
import { CommonComponent, CommonComponentBuilder } from "../../Core/Components/CommonBehavior copy";
import { ComponentManager } from "../../Core/Components/ComponentManager";
import { IComponent } from "../../Core/Components/IComponent";
import { IComponentBuilder } from "../../Core/Components/IComponentBuilder";
import { IComponentData } from "../../Core/Components/IComponentData";
import { Vector3 } from "../../Core/Math/Vector3";
import { JsonUtility } from "../../Utility/JsonUtility";


    /**
     * The builder for a sprite component.
     */
    export class UnityObjectComponentBuilder extends CommonComponentBuilder {
        public get type(): string {
            return "UnityObjectComponent";
        }
    }

    /**
     * A component which renders a two-dimensional image on the screen.
     */
    export class UnityObjectComponent extends CommonComponent {

        private _unityGO: UnityEngine.GameObject;
        private _pos : UnityEngine.Vector3 = new UnityEngine.Vector3();
        private _rot : UnityEngine.Vector3 = new UnityEngine.Vector3();
        private _sca : UnityEngine.Vector3 = new UnityEngine.Vector3();

        /** Loads this component. */
        public override load(): void {
            // this._unityGO = (this._data as UnityObjectComponentData).unityGo;
        
            let data = JsonUtility.TryGetArrayItmeByName(this.commonData.data, "gameObject");
            let obj = TSEngine.InstanceHUB.Get(data.refID);
            this._unityGO = (obj as ScriptableObjectArchitecture.GameObjectReference).Value;

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

            this._unityGO.transform.localPosition = this._pos;
            this._unityGO.transform.localEulerAngles = this._rot;
            this._unityGO.transform.localScale = this._sca;

            super.render( );
        }
    }

