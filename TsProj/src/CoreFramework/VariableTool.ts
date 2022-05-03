import { UnityEngine, PuergpCs } from "csharp";

export class VariableTool {
    public static Get<T extends PuergpCs.Variables.BaseVariable$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }
}