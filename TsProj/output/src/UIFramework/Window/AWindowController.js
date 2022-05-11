"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWindowController = exports.AWindowControllerT = void 0;
const AUIScreenController_1 = require("../Core/AUIScreenController");
class AWindowControllerT extends AUIScreenController_1.AUIScreenController {
    get hideOnForegroundLost() {
        return this.properties.hideOnForegroundLost;
    }
    get isPopup() {
        return this.properties.isPopup;
    }
    get priority() {
        return this.properties.windowQueuePriority;
    }
    UI_Close() {
        this.closeRequest.Dispatch(this.gameObject);
    }
    SetProperties(props) {
        if (props != null) {
            if (props.suppressPrefabProperties.value == false) {
                props.hideOnForegroundLost = this.properties.hideOnForegroundLost;
                props.windowQueuePriority = this.properties.windowQueuePriority;
                props.isPopup = this.properties.isPopup;
            }
            this.properties = props;
        }
    }
    HierarchyFixOnShow() {
        this.gameObject.transform.SetAsLastSibling();
    }
}
exports.AWindowControllerT = AWindowControllerT;
class AWindowController extends AWindowControllerT {
}
exports.AWindowController = AWindowController;
//# sourceMappingURL=AWindowController.js.map