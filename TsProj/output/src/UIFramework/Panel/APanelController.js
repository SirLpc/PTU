"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWindowController = exports.APanelControllerT = void 0;
const AUIScreenController_1 = require("../Core/AUIScreenController");
class APanelControllerT extends AUIScreenController_1.AUIScreenController {
    get priority() {
        if (this.properties != null) {
            return this.properties.priority;
        }
        else {
            return null;
        }
    }
    SetProperties(props) {
        super.SetProperties(props);
    }
}
exports.APanelControllerT = APanelControllerT;
class AWindowController extends APanelControllerT {
}
exports.AWindowController = AWindowController;
//# sourceMappingURL=APanelController.js.map