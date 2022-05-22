"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const TSComponentHub_1 = require("./TSComponentHub");
class App {
    static _appInstance = null;
    _compHub = null;
    constructor() {
        App._appInstance = this;
    }
    static get logger() {
        return App._appInstance.logger;
    }
    static get compHub() {
        if (App._appInstance._compHub != null) {
            return App._appInstance._compHub;
        }
        var hub = new TSComponentHub_1.TSComponentHub();
        setInterval(() => {
            hub.Tick();
        }, 1 / 60);
        App._appInstance._compHub = hub;
        return hub;
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map