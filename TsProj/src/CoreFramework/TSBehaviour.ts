export abstract class TSBehaviour {
    public enabled : boolean = true;
    public destroyed : boolean = false;

    public Awake() : void {};
    public OnEnable() : void {};
    public Start() : void {};
    public Update() : void {};
    public LateUpdate() : void {};
    public OnDisable() : void {};
    public OnDestroy() : void {};
}