import { Vector3 } from "../Math/Vector3";
import { BaseVariableRef } from "./BaseVariableRef";
import { IVariableRef } from "./IVariableRef";

export abstract class BoolVariableRef<IJT> extends BaseVariableRef<IJT, boolean> {
}