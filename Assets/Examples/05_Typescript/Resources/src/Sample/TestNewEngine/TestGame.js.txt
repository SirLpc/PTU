"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGame = void 0;
const LevelManager_1 = require("../../Engine/Core/World/LevelManager");
class TestGame {
    UpdateReady() {
        // throw new Error("Method not implemented.");
        LevelManager_1.LevelManager.changeLevel("main");
    }
    Update(time) {
        // throw new Error("Method not implemented.");
    }
    Render(time) {
        // throw new Error("Method not implemented.");
    }
}
exports.TestGame = TestGame;
//# sourceMappingURL=TestGame.js.map