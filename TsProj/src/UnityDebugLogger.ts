import { UnityEngine } from "csharp";
import { Logger } from "./CoreFramework/Logger";

export class UnityDebugLogger implements Logger {
    public Log(message: string): void {
        UnityEngine.Debug.Log(message);
    }
    public LogWarning(message: string): void {
        UnityEngine.Debug.LogWarning(message);
    }

    public LogError(message: string): void {
        UnityEngine.Debug.LogError(message);
    }

}