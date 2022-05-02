"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApp = void 0;
const FactoryProducer_1 = require("./CoreFramework/FactoryProducer");
const DefaultAssetAddress_1 = require("./CoreFramework/DefaultAssetAddress");
class GameApp {
    constructor() {
        FactoryProducer_1.FactoryProducer.GetFactory().GetInstance(new DefaultAssetAddress_1.DefaultAssetAddress(""));
    }
}
exports.GameApp = GameApp;
//# sourceMappingURL=GameApp.js.map