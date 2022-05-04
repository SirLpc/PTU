import { UnityEngine } from "csharp";
import { ATSComponent } from "../../CoreFramework/TSComponentHub";

export abstract class ATransitionComponent extends ATSComponent {
    public abstract Animate(target: UnityEngine.Transform, callWhenFinished: ()=>void): void;
}