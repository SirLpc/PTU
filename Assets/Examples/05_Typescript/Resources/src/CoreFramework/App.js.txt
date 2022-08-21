"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Logger_1 = require("./Logger");
const DIC_1 = require("./DIC");
class App {
    static _appInstance = null;
    _compHub = null;
    _behaviourRunner;
    constructor(compHub, behaivourRunner) {
        App._appInstance = this;
        this._compHub = compHub;
        this._behaviourRunner = behaivourRunner;
        setInterval(() => {
            this.Update();
        }, 1000 / 60);
    }
    static get logger() {
        return DIC_1.DIC.Make(Logger_1.Logger);
    }
    static get compHub() {
        return App._appInstance._compHub;
    }
    Update() {
        this._compHub.Tick();
        this._behaviourRunner.Update();
    }
    AttachActor(tsActor) {
        this._behaviourRunner.AttachActor(tsActor);
    }
    DetachActor(tsActor) {
        tsActor.destroyed = true;
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map