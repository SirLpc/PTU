import { LevelManager } from "../../Engine/Core/World/LevelManager";
import { IGame } from "../../Engine/Game/IGame";

    export class TestGame implements IGame {

        private _levelManager: LevelManager;

        constructor(levelManager: LevelManager) {
            this._levelManager = levelManager;
        }

        UpdateReady(): void {
            this._levelManager.changeLevel("main");
            console.log("UpdateReady, load main level.");
        }
        Update(time: number): void {
        }
        Render(time: number): void {
        }

    }
