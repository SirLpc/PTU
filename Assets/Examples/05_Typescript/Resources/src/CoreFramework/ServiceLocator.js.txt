"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLocator = void 0;
class ServiceLocator {
    static _services = new Map();
    // create<T>(type: (new () => T)): T {
    //     return new type();
    // }
    static Register(type, instance) {
        if (this._services.has(type)) {
            console.log(type + " already registered!");
            return;
        }
        this._services.set(type, instance);
    }
    static Get(type) {
        if (this._services.has(type) == false) {
            console.log(type + " does not registered!");
            return;
        }
        return this._services.get(type);
    }
}
exports.ServiceLocator = ServiceLocator;
//# sourceMappingURL=ServiceLocator.js.map