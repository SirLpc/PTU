import { UnityEngine } from "csharp";
import { Entity, System } from "../ECS/ECS";

export class UISystem extends System 
{
    componentsRequired = new Set<Function>([]);
    update(entities: Set<Entity>): void 
    {
        UnityEngine.Debug.Log("aa");    
    }

    onAdd(): void {
    }

    onRemove(): void {
    }
}