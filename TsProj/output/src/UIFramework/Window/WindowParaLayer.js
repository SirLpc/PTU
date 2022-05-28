"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowParaLayer = void 0;
const TSComponentHub_1 = require("../../CoreFramework/TSComponentHub");
class WindowParaLayer extends TSComponentHub_1.ATSComponent {
    enableUpdate;
    darkenBgObject;
    containedScreens = [];
    AddScreen(screenRectTransform) {
        screenRectTransform.SetParent(this.gameObject.transform, false);
        this.containedScreens.push(screenRectTransform.gameObject);
    }
    RefreshDarken() {
        for (const iterator of this.containedScreens) {
            if (iterator.IsNull() == false) {
                if (iterator.activeSelf) {
                    this.darkenBgObject.value.SetActive(true);
                    return;
                }
            }
        }
        this.darkenBgObject.value.SetActive(false);
    }
    DarkenBG() {
        this.darkenBgObject.value.SetActive(true);
        this.darkenBgObject.value.transform.SetAsLastSibling();
    }
}
exports.WindowParaLayer = WindowParaLayer;
//# sourceMappingURL=WindowParaLayer.js.map