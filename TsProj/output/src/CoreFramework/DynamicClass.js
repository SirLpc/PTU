"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicClass = void 0;
const TestTSComponent_1 = require("../TestTSComponent");
const UIFrame_1 = require("../UIFramework/UIFrames/UIFrame");
class DynamicClass {
    static types = new Map([
        ["./TestTSComponent", TestTSComponent_1.TestTSComponent],
        ["./UIFramework/UIFrames/UIFrame", UIFrame_1.UIFrame],
    ]);
    static Create(typeName, ...args) {
        return new (DynamicClass.types.get(typeName))(...args);
    }
}
exports.DynamicClass = DynamicClass;
//# sourceMappingURL=DynamicClass.js.map