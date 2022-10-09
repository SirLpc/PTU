import { CommonComponent } from "../Components/CommonComponent";


export abstract class BaseBehaviorComponent extends CommonComponent {

    private _enabled: boolean = false;

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(val: boolean) {
        if (this._enabled != val) {
            this._enabled = val;
            if (this._enabled) {
                this.onEnable();
            }
            else {
                this.onDisable();
            }
        }
    }

    public override load(): void {
        super.load();

        this._enabled = true;
        this.onEnable();
    }

    public override unload(): void {
        this._enabled = false;
        this.onDisable();

        super.unload();
    }

    public onEnable(): void {
    }

    public onDisable(): void {
    }
}