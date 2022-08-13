export abstract class ALogger
{
    public constructor(){};
    public abstract Log(message: string): void;
    public abstract LogWarning(message: string): void;
    public abstract LogError(message: string): void;
}