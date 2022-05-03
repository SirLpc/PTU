﻿import { UnityEngine, PuergpCs } from "csharp";

export class EventTool {
    public static Get<T extends PuergpCs.Events.GameEvent$1<K>, K>(path: string): T {
        return UnityEngine.Resources.Load(path) as T;
    }
}