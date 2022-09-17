"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIC = void 0;
class ServiceEntry {
    key;
    _resolver;
    _singleton;
    _service;
    get service() {
        if (!this._singleton) {
            return this._resolver();
        }
        if (this._service != undefined) {
            return this._service;
        }
        this._service = this._resolver();
        return this._service;
    }
    constructor(key, _resolver, _singleton) {
        this.key = key;
        this._resolver = _resolver;
        this._singleton = _singleton;
    }
}
class DIC {
    static serviceMap = new Map();
    static RegisterSingleton(fn, resolver) {
        //console.log(`set ${fn.name}`);
        if (DIC.serviceMap.has(fn.name)) {
            throw Error(`Service named : ${fn.name}  has already registered!`);
        }
        DIC.serviceMap.set(fn.name, new ServiceEntry(fn.name, resolver, true));
    }
    static RegisterTransient(fn, resolver) {
        //console.log(`set ${fn.name}`);
        if (DIC.serviceMap.has(fn.name)) {
            throw Error(`Service named : ${fn.name}  has already registered!`);
        }
        DIC.serviceMap.set(fn.name, new ServiceEntry(fn.name, resolver, false));
    }
    static Make(fn) {
        //console.log(`get ${fn.name}`);
        let service = DIC.serviceMap.get(fn.name);
        if (service == undefined) {
            throw Error("You must register the service before retrieving it.");
        }
        return service.service;
    }
}
exports.DIC = DIC;
//# sourceMappingURL=DIC.js.map