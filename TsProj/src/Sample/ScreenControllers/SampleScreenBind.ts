import { AScreenTSComponentBind } from "../../UIFramework/Configs/UISetting";
import { NavigationPanelController } from "./NavigationPanelController";
import { StartWindowController } from "./StartWindowController";

export class SampleScreenBind extends AScreenTSComponentBind {

    private _binds : Map<string, any> = new Map<string, any>
    (
        [
            ["StartGameWindow", StartWindowController],
            ["NavigationPanel", NavigationPanelController],
        ]
    );

    public get binds(): Map<string, any> {
        return this._binds;
    }


}