"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonUtility = void 0;
class JsonUtility {
    static TryGetArrayItmeByName(jsonObj, name) {
        for (const iterator of jsonObj) {
            if (iterator.name == name) {
                return iterator;
            }
        }
        return undefined;
    }
}
exports.JsonUtility = JsonUtility;
//# sourceMappingURL=JsonUtility.js.map