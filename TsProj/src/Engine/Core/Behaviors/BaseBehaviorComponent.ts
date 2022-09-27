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
                this.onEnabled();
            }
            else {
                this.onDisabled();
            }
        }
    }

    public override load(): void {
        super.load();

        this._enabled = true;
        this.onEnabled();
    }

    public override unload(): void {
        this._enabled = false;
        this.onDisabled();

        super.unload();
    }

    public onEnabled(): void {
    }

    public onDisabled(): void {
    }
}