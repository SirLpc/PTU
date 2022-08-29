"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
const Vector2_1 = require("./Vector2");
/** Represents a 3-component vector. */
class Vector3 {
    _x;
    _y;
    _z;
    /**
     * Creates a new vector 3.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    constructor(x = 0, y = 0, z = 0) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    /** The x component. */
    get x() {
        return this._x;
    }
    /** The x component. */
    set x(value) {
        this._x = value;
    }
    /** The y component. */
    get y() {
        return this._y;
    }
    /** The y component. */
    set y(value) {
        this._y = value;
    }
    /** The z component. */
    get z() {
        return this._z;
    }
    /** The z component. */
    set z(value) {
        this._z = value;
    }
    /** Returns a vector3 with all components set to 0. */
    static get zero() {
        return new Vector3();
    }
    /** Returns a vector3 with all components set to 1. */
    static get one() {
        return new Vector3(1, 1, 1);
    }
    /**
     * Calculates the difference between vector a and vector b.
     * @param a The first vector.
     * @param b The second vector.
     */
    static distance(a, b) {
        let diff = a.subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y + diff.z * diff.z);
    }
    /**
     * Sets the x, y and z components of this vector.
     * @param x The x component value.
     * @param y The y component value.
     * @param z The z component value.
     */
    set(x, y, z) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
        if (z !== undefined) {
            this._z = z;
        }
    }
    /**
     * Check if this vector is equal to the one passed in.
     * @param v The vector to check against.
     */
    equals(v) {
        return (this.x === v.x && this.y === v.y && this.z === v.z);
    }
    /** Returns the data of this vector as a number array. */
    toArray() {
        return [this._x, this._y, this._z];
    }
    /** Returns the data of this vector as a Float32Array. */
    toFloat32Array() {
        return new Float32Array(this.toArray());
    }
    /** Converts this vector to a Vector2 by dropping the Z component. */
    toVector2() {
        return new Vector2_1.Vector2(this._x, this._y);
    }
    /**
     * Copies the contents of the provided vector to this vector.
     * @param vector The vector to be copied.
     */
    copyFrom(vector) {
        this._x = vector._x;
        this._y = vector._y;
        this._z = vector._z;
    }
    /**
     * Sets the values of this vector from the provided JSON.
     * @param json The JSON to set from.
     */
    setFromJson(json) {
        if (json.x !== undefined) {
            this._x = Number(json.x);
        }
        if (json.y !== undefined) {
            this._y = Number(json.y);
        }
        if (json.z !== undefined) {
            this._z = Number(json.z);
        }
    }
    /**
     * Adds the provided vector to this vector.
     * @param v The vector to be added.
     */
    add(v) {
        this._x += v._x;
        this._y += v._y;
        this._z += v._z;
        return this;
    }
    /**
     * Subtracts the provided vector from this vector.
     * @param v The vector to be subtracted.
     */
    subtract(v) {
        this._x -= v._x;
        this._y -= v._y;
        this._z -= v._z;
        return this;
    }
    /**
     * Multiplies this vector by the provided vector.
     * @param v The vector to be multiplied by.
     */
    multiply(v) {
        this._x *= v._x;
        this._y *= v._y;
        this._z *= v._z;
        return this;
    }
    /**
     * Divides this vector by the provided vector.
     * @param v The vector to be divided by.
     */
    divide(v) {
        this._x /= v._x;
        this._y /= v._y;
        this._z /= v._z;
        return this;
    }
    /**
     * Scales this vector by the provided number.
     */
    scale(scale) {
        this._x *= scale;
        this._y *= scale;
        this._z *= scale;
        return this;
    }
    /** Clones this vector. */
    clone() {
        return new Vector3(this._x, this._y, this._z);
    }
}
exports.Vector3 = Vector3;
//# sourceMappingURL=Vector3.js.map