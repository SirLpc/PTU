"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIC = void 0;
class ServiceEntry {
    key;
    resolver;
    singleton;
    _service;
    get service() {
        if (!this.singleton) {
            return this.resolver();
        }
        if (this._service != undefined) {
            return this._service;
        }
        this._service = this.resolver();
        return this._service;
    }
    constructor(key, resolver, singleton) {
        this.key = key;
        this.resolver = resolver;
        this.singleton = singleton;
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
            throw Error("You must register the service before retrieving it instance." + fn.name);
        }
        return service.service;
    }
    static GetResolver(fn) {
        let service = DIC.serviceMap.get(fn.name);
        if (service == undefined) {
            throw Error("You must register the service before retrieving it provider, named: " + fn.name);
        }
        if (service.singleton) {
            throw Error("You can`t require a singleton provider, named: " + fn.name);
        }
        return service.resolver;
    }
}
exports.DIC = DIC;
//# sourceMappingURL=DIC.js.map