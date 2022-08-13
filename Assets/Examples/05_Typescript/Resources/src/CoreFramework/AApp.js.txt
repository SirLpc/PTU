"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AApp = void 0;
const ALogger_1 = require("./ALogger");
const DIC_1 = require("./DIC");
class AApp {
    static _appInstance = null;
    _compHub = null;
    constructor(compHub) {
        AApp._appInstance = this;
        this._compHub = compHub;
        setInterval(() => {
            this.Update();
        }, 1 / 60);
    }
    static get logger() {
        return DIC_1.DIC.Make(ALogger_1.ALogger);
    }
    static get compHub() {
        return AApp._appInstance._compHub;
    }
    Update() {
        this._compHub.Tick();
    }
}
exports.AApp = AApp;
//# sourceMappingURL=AApp.js.map