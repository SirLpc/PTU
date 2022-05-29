"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSHelpers = void 0;
class TSHelpers {
    static Cast(instance, targetType) {
        if (instance instanceof targetType) {
            return instance;
        }
        return null;
    }
}
exports.TSHelpers = TSHelpers;
//# sourceMappingURL=TSHelpers.js.map