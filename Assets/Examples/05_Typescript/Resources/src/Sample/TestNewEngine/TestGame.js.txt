"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGame = void 0;
const LevelManager_1 = require("../../Engine/Core/World/LevelManager");
class TestGame {
    UpdateReady() {
        LevelManager_1.LevelManager.changeLevel("main");
        console.log("UpdateReady, load main level.");
    }
    Update(time) {
    }
    Render(time) {
    }
}
exports.TestGame = TestGame;
//# sourceMappingURL=TestGame.js.map