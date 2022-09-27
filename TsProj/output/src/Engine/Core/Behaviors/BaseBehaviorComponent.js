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
                this.onEnabled();
            }
            else {
                this.onDisabled();
            }
        }
    }
    load() {
        super.load();
        this._enabled = true;
        this.onEnabled();
    }
    unload() {
        this._enabled = false;
        this.onDisabled();
        super.unload();
    }
    onEnabled() {
    }
    onDisabled() {
    }
}
exports.BaseBehaviorComponent = BaseBehaviorComponent;
//# sourceMappingURL=BaseBehaviorComponent.js.map