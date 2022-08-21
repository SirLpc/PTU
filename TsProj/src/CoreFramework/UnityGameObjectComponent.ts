import { UnityEngine } from "csharp";
import { TSBehaviour } from "./TSBehaviour";

export class UnityGameObjectComponent extends TSBehaviour {
    
    private _unityGo : UnityEngine.GameObject;

    constructor(unityGo : UnityEngine.GameObject) {
        super();
        
        this._unityGo = unityGo;
    }

    public SetActive(enabled : boolean) : void {
        this._unityGo.SetActive(enabled);
    }
}