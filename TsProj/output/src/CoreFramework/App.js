"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AApp = void 0;
const ILogger_1 = require("./ILogger");
const Locator_1 = require("./Locator");
const TSComponentHub_1 = require("./TSComponentHub");
class AApp {
    static _appInstance = null;
    _compHub = null;
    constructor() {
        AApp._appInstance = this;
    }
    static get logger() {
        return Locator_1.Locator.get(ILogger_1.ILogger);
    }
    static get compHub() {
        if (AApp._appInstance._compHub != null) {
            return AApp._appInstance._compHub;
        }
        var hub = new TSComponentHub_1.TSComponentHub();
        setInterval(() => {
            hub.Tick();
        }, 1 / 60);
        AApp._appInstance._compHub = hub;
        return hub;
    }
}
exports.AApp = AApp;
//# sourceMappingURL=App.js.map