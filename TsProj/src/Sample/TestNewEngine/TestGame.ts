import { LevelManager } from "../../Engine/Core/World/LevelManager";
import { IGame } from "../../Engine/Game/IGame";

    export class TestGame implements IGame {
        UpdateReady(): void {
            LevelManager.changeLevel("main");
            console.log("UpdateReady, load main level.");
        }
        Update(time: number): void {
        }
        Render(time: number): void {
        }

    }
