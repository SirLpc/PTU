import { UnityEngine } from "csharp";
import { ALogger } from "./CoreFramework/ALogger";

export class UnityDebugLogger implements ALogger {
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