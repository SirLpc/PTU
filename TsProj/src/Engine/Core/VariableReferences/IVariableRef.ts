export interface IVariableRef<T> {
    get value() : T;
    inject(data: any) : void; 
}