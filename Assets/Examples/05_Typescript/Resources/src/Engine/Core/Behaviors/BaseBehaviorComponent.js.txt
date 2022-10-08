"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBehaviorComponent = void 0;
const CommonComponent_1 = require("../Components/CommonComponent");
class BaseBehaviorComponent extends CommonComponent_1.CommonComponent {
    _enabled = false;
    get enabled() {
        return this._enabled;
    }
    set enabled(val) {
        if (this._enabled != val) {
            this._enabled = val;
            if (this._enabled) {
                this.onEnable();
            }
            else {
                this.onDisable();
            }
        }
    }
    load() {
        super.load();
        this._enabled = true;
        this.onEnable();
    }
    unload() {
        this._enabled = false;
        this.onDisable();
        super.unload();
    }
    onEnable() {
    }
    onDisable() {
    }
}
exports.BaseBehaviorComponent = BaseBehaviorComponent;
//# sourceMappingURL=BaseBehaviorComponent.js.map