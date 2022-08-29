import { LevelManager } from "../../Engine/Core/World/LevelManager";
import { IGame } from "../../Engine/Game/IGame";

    export class TestGame implements IGame {
        UpdateReady(): void {
            // throw new Error("Method not implemented.");
            LevelManager.changeLevel("main");
        }
        Update(time: number): void {
            // throw new Error("Method not implemented.");
            console.log(LevelManager.activeLevel.name)
        }
        Render(time: number): void {
            // throw new Error("Method not implemented.");
        }

    }
