export abstract class ILogger
{
    public abstract Log(message: string): void;
    public abstract LogWarning(message: string): void;
    public abstract LogError(message: string): void;
}