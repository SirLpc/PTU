import { TEntity } from "../World/TEntity";
import { ComponentManager } from "./ComponentManager";
import { IComponent } from "./IComponent";
import { IComponentData } from "./IComponentData";



    export abstract class BaseComponent implements IComponent {

        /** The owning entity. */
        protected _owner: TEntity;
        protected _data: IComponentData;

        /**
         * The name of this component.
         */
        public name: string;

        /** The owning entity. */
        public get owner(): TEntity {
            return this._owner;
        }

        /**
         * Sets the owner of this component.
         * @param owner The owner to be set.
         */
        public setOwner( owner: TEntity ): void {
            this._owner = owner;
        }

        /**
         * Sets the data of this component.
         * @param data The data for this component.
         */
        public setData( data: IComponentData) {
            this._data = data;
            this.name = data.name;
        }

        /** Loads this component. */
        public load(): void {
        }

        /** Performs pre-update procedures on this component. */
        public updateReady(): void {
        }

        /**
         * Updates this component.
         * @param time The amount of time in milliseconds since the last update.
         */
        public update( time: number ): void {
        }

        /**
         * Renders this component.
         */
        // public render( renderView: RenderView ): void {
        public render(  ): void {
        }
    }