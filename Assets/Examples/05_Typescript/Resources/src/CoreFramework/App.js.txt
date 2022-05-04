"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    static _appInstance = null;
    constructor() {
        App._appInstance = this;
    }
    static get logger() {
        return App._appInstance.logger;
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map