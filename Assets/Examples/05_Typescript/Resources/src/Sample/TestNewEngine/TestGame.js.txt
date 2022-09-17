"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGame = void 0;
class TestGame {
    _levelManager;
    constructor(levelManager) {
        this._levelManager = levelManager;
    }
    UpdateReady() {
        this._levelManager.changeLevel("main");
        console.log("UpdateReady, load main level.");
    }
    Update(time) {
    }
    Render(time) {
    }
}
exports.TestGame = TestGame;
//# sourceMappingURL=TestGame.js.map