var NT;
(function (NT) {
    /**
     * Represents the transformation of an object, providing position, rotation and scale.
     */
    class Transform {
        /** The position. Default: Vector3.zero */
        position = NT.Vector3.zero;
        /** The rotation. Default: Vector3.zero */
        rotation = NT.Vector3.zero;
        /** The rotation. Default: Vector3.one */
        scale = NT.Vector3.one;
        /**
         * Creates a copy of the provided transform.
         * @param transform The transform to be copied.
         */
        copyFrom(transform) {
            this.position.copyFrom(transform.position);
            this.rotation.copyFrom(transform.rotation);
            this.scale.copyFrom(transform.scale);
        }
        /** Creates and returns a matrix based on this transform. */
        getTransformationMatrix() {
            let translation = NT.Matrix4x4.translation(this.position);
            let rotation = NT.Matrix4x4.rotationXYZ(this.rotation.x, this.rotation.y, this.rotation.z);
            let scale = NT.Matrix4x4.scale(this.scale);
            // T * R * S
            return NT.Matrix4x4.multiply(NT.Matrix4x4.multiply(translation, rotation), scale);
        }
        /**
         * Sets the values of this transform to the ones provided in the given JSON.
         * Only values which are overridden need be provided. For example, a position of [0,1,0]
         * needs only to provide the y value (1) as 0 is the default for x and z.
         * @param json The JSON to set from.
         */
        setFromJson(json) {
            if (json.position !== undefined) {
                this.position.setFromJson(json.position);
            }
            if (json.rotation !== undefined) {
                this.rotation.setFromJson(json.rotation);
            }
            if (json.scale !== undefined) {
                this.scale.setFromJson(json.scale);
            }
        }
    }
    NT.Transform = Transform;
})(NT || (NT = {}));
//# sourceMappingURL=Transform.js.map