var NT;
(function (NT) {
    /**
     * The basis from which all objects should be inherited. TObjects are each given
     * a unique identifier which can be used to identify the object for debugging purposes.
     * Objects ultimately inheriting from TObject should be prefixed with a T to denote this.
     */
    class TObject {
        // The global object id, which is incremented every time a new TObject is created.
        static _GLOBAL_OBJECT_ID = 0;
        _id;
        /** Creates a new TObject. */
        constructor() {
            this._id = TObject._GLOBAL_OBJECT_ID++;
        }
        /** Returns the unique identifier for this object. */
        get ID() {
            return this._id;
        }
        destroy() {
            this._id = undefined;
            // NOTE: If this is ever added to a tracking system, it should be untracked here.
        }
    }
    NT.TObject = TObject;
})(NT || (NT = {}));
//# sourceMappingURL=TObject.js.map