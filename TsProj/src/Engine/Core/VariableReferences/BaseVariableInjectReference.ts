import { IVariableRef } from "./IVariableRef";

export abstract class BaseVariableInjectReference<TST, IJT> implements IVariableRef<TST> {
    abstract inject(data: any): TST;
    abstract get value() : TST;
    abstract get ijValue() : IJT;
}