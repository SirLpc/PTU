"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTSComponent = void 0;
const TSComponentHub_1 = require("./CoreFramework/TSComponentHub");
const csharp_1 = require("csharp");
class TestTSComponent extends TSComponentHub_1.ATSComponent {
    OnEnable() {
        super.OnEnable();
        csharp_1.UnityEngine.Debug.Log("on enable");
    }
    Update() {
        super.Update();
        csharp_1.UnityEngine.Debug.Log("update..");
    }
    OnDisable() {
        super.OnDisable();
        csharp_1.UnityEngine.Debug.Log("on disable");
    }
    OnDestroy() {
        super.OnDestroy();
        csharp_1.UnityEngine.Debug.Log("on destroy");
    }
}
exports.TestTSComponent = TestTSComponent;
//# sourceMappingURL=TestTSComponent.js.map