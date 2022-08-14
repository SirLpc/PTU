export abstract class Logger
{
    public constructor(){};
    public abstract Log(message: string): void;
    public abstract LogWarning(message: string): void;
    public abstract LogError(message: string): void;
}