"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryProducer = void 0;
class FactoryProducer {
    static GetFactory(type) {
        // if(choice.equalsIgnoreCase("SHAPE")){
        //    return new ShapeFactory();
        // } else if(choice.equalsIgnoreCase("COLOR")){
        //    return new ColorFactory();
        // }
        return new type();
    }
}
exports.FactoryProducer = FactoryProducer;
//# sourceMappingURL=FactoryProducer.js.map