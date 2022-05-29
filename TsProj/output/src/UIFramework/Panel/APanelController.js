"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APanelController = exports.APanelControllerT = void 0;
const AUIScreenController_1 = require("../Core/AUIScreenController");
const PanelProperties_1 = require("./PanelProperties");
class APanelControllerT extends AUIScreenController_1.AUIScreenController {
    get priority() {
        if (this.properties != null) {
            return this.properties.priority;
        }
        else {
            return null;
        }
    }
    constructor(unityGo) {
        super(unityGo);
        this.properties = new PanelProperties_1.PanelProperties();
        this.properties.priority = this.binder.Get("priority");
    }
    SetProperties(props) {
        super.SetProperties(props);
    }
}
exports.APanelControllerT = APanelControllerT;
class APanelController extends APanelControllerT {
}
exports.APanelController = APanelController;
//# sourceMappingURL=APanelController.js.map