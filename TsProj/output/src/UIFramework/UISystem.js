"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISystem = void 0;
const csharp_1 = require("csharp");
const ECS_1 = require("../ECS/ECS");
class UISystem extends ECS_1.System {
    componentsRequired = new Set([]);
    update(entities) {
        csharp_1.UnityEngine.Debug.Log("aa");
    }
    onAdd() {
    }
    onRemove() {
    }
}
exports.UISystem = UISystem;
//# sourceMappingURL=UISystem.js.map