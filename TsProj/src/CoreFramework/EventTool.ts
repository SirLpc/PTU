﻿import { UnityEngine, Puergp } from "csharp";

export class EventTool {
    public static Get<T extends Puergp.Events.GameEvent$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }
}