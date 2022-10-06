import { IVariableRef } from "./IVariableRef";

export abstract class BaseVariableRef<IJT, TST> implements IVariableRef<TST> {
    abstract inject(data: any): void;
    abstract get value() : TST;
    abstract get ijValue() : IJT;
}