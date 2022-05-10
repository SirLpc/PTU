import { IWindowProperties } from "../Core/IScreenProperties";
import { IWindowController } from "../Core/IUIScreenController";

export class WindowHistoryEntry {

    public constructor(public screen: IWindowController, public properties: IWindowProperties) { }

    public Show(): void {
        this.screen.Show(this.properties);
    }

}