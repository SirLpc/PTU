import { Vector3 } from "../Math/Vector3";
import { IVariableRef } from "./IVariableRef";

export abstract class Vector3VariableRef<IJT> implements IVariableRef<Vector3> {
    abstract inject(data: any): Vector3;
    abstract get value() : Vector3;
    abstract get ijValue() : IJT;
}