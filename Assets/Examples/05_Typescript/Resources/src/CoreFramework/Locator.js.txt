"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locator = void 0;
class Locator {
    static serviceMap;
    static init() {
        console.log('Locator -> init');
        Locator.serviceMap = new Map();
    }
    static set(fn, inst) {
        console.log(`get ${fn.name}`);
        if (Locator.serviceMap == undefined) {
            Locator.init();
        }
        Locator.serviceMap.set(fn.name, inst);
    }
    static get(fn) {
        console.log(`get ${fn.name}`);
        if (Locator.serviceMap == undefined) {
            Locator.init();
        }
        let service = Locator.serviceMap.get(fn.name);
        if (service == undefined) {
            throw Error("You must register the service before retrieving it.");
        }
        return service;
    }
}
exports.Locator = Locator;
//# sourceMappingURL=Locator.js.map