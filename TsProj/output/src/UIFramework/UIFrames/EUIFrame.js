"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUIFrame = exports.EUIFrameBuilder = void 0;
const BaseBehaviorComponent_1 = require("../../Engine/Core/Behaviors/BaseBehaviorComponent");
const CommonComponent_1 = require("../../Engine/Core/Components/CommonComponent");
class EUIFrameBuilder extends CommonComponent_1.CommonComponentBuilder {
    get type() {
        return "EUIFrame";
    }
}
exports.EUIFrameBuilder = EUIFrameBuilder;
class EUIFrame extends BaseBehaviorComponent_1.BaseBehaviorComponent {
    deactivateScreenGOs;
    constructor(deactivateScreenGOs) {
        super();
        this.deactivateScreenGOs = deactivateScreenGOs;
    }
    load() {
        this.commonData.injectField(this.deactivateScreenGOs, "deactivateScreenGOs");
        super.load();
        console.error(this.deactivateScreenGOs.value);
    }
}
exports.EUIFrame = EUIFrame;
//# sourceMappingURL=EUIFrame.js.map