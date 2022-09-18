export interface IVariableRef<T> {
    inject(data: any): T;
    get value() : T;
    inject(data: any) : T; 
}