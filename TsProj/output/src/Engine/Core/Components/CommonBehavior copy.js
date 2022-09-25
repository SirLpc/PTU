"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonComponent = exports.CommonComponentBuilder = exports.CommonComponentData = void 0;
const JsonUtility_1 = require("../../Utility/JsonUtility");
const BaseComponent_1 = require("./BaseComponent");
/**
 * The data for a rotation behavior.
 */
class CommonComponentData {
    /** The name of the behavior. */
    name;
    data;
    /**
     * Sets the properties of this data from the provided json.
     * @param json The json to set from.
     */
    setFromJson(json) {
        if (json.name === undefined) {
            throw new Error("Name must be defined in behavior data.");
        }
        this.name = String(json.name);
        this.data = json.data;
        return this;
    }
    injectField(variable, fieldName) {
        let fieldData = JsonUtility_1.JsonUtility.TryGetArrayItmeByName(this.data, fieldName);
        variable.inject(fieldData);
    }
}
exports.CommonComponentData = CommonComponentData;
/** The builder for a rotation behavior. */
class CommonComponentBuilder {
    _data;
    _behaviour;
    _behaviourManager;
    constructor(_data, _behaviour, _behaviourManager) {
        this._data = _data;
        this._behaviour = _behaviour;
        this._behaviourManager = _behaviourManager;
        this._behaviourManager.registerBuilder(this);
    }
    buildFromJson(json) {
        let data = this._data().setFromJson(json);
        let behaviour = this._behaviour().setData(data);
        return behaviour;
    }
}
exports.CommonComponentBuilder = CommonComponentBuilder;
class CommonComponent extends BaseComponent_1.BaseComponent {
    get commonData() {
        return this._data;
    }
}
exports.CommonComponent = CommonComponent;
//# sourceMappingURL=CommonBehavior%20copy.js.map