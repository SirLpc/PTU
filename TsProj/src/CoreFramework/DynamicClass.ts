import { TestTSComponent } from "../TestTSComponent";
import { UIFrame } from "../UIFramework/UIFrames/UIFrame";


export class DynamicClass {
    static  types : Map<string, any> = new Map<string, any>(
    [
        ["./TestTSComponent", TestTSComponent],
        ["./UIFramework/UIFrames/UIFrame", UIFrame],
    ]);

    public static Create<T>(typeName: string, ...args: any[]) : T {
        return new (DynamicClass.types.get(typeName))(...args);
    }
}