import { UnityEngine, Puergp } from "csharp";

export class VariableTool {
    public static Get<T extends Puergp.Variables.BaseVariable$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }

    public static GetCollection<T extends Puergp.Collections.BaseCollection$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }

    public static GetEventT<T extends Puergp.Events.GameEvent$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }

    public static GetEvent<T extends Puergp.Events.GameEvent>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }

}