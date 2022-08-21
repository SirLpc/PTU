"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIC = void 0;
class DIC {
    static serviceMap;
    static resolverMap;
    static init() {
        console.log('Locator -> init');
        DIC.serviceMap = new Map();
        DIC.resolverMap = new Map();
    }
    static Register(fn, inst) {
        //console.log(`set ${fn.name}`);
        if (DIC.resolverMap == undefined) {
            DIC.init();
        }
        DIC.resolverMap.set(fn.name, inst);
    }
    static Make(fn) {
        //console.log(`get ${fn.name}`);
        if (DIC.serviceMap == undefined) {
            DIC.init();
        }
        let service = DIC.serviceMap.get(fn.name);
        if (service != undefined) {
            return service;
        }
        let resolver = DIC.resolverMap.get(fn.name);
        if (resolver == undefined) {
            throw Error("You must register the service before retrieving it.");
        }
        service = resolver();
        if (service == undefined) {
            throw Error("Invalid resolver to retrieving service.");
        }
        return service;
    }
}
exports.DIC = DIC;
//# sourceMappingURL=DIC.js.map