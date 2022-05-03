import { IAbstractFactory } from "./IAbstractFactory";

export class FactoryProducer 
{
    public static GetFactory<K>(type: (new () => K)) : K
    {
        // if(choice.equalsIgnoreCase("SHAPE")){
        //    return new ShapeFactory();
        // } else if(choice.equalsIgnoreCase("COLOR")){
        //    return new ColorFactory();
        // }
        return new type();
     }
}