import { UnityEngine } from "csharp";
import { ILogger } from "./CoreFramework/ILogger";

export class UnityDebugLogger implements ILogger {

    public LogError(message: string): void {
        UnityEngine.Debug.LogError(message);
    }

}