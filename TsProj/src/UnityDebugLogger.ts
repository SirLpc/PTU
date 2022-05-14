import { UnityEngine } from "csharp";
import { ILogger } from "./CoreFramework/ILogger";

export class UnityDebugLogger implements ILogger {
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