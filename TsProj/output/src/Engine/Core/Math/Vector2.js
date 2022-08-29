"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
const Vector3_1 = require("./Vector3");
/** Represents a 2-component vector. */
class Vector2 {
    _x;
    _y;
    /**
     * Creates a new vector 2.
     * @param x The x component.
     * @param y The y component.
     */
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
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
    /** Returns a vector2 with all components set to 0. */
    static get zero() {
        return new Vector2();
    }
    /** Returns a vector2 with all components set to 1. */
    static get one() {
        return new Vector2(1, 1);
    }
    /**
     * Calculates the difference between vector a and vector b.
     * @param a The first vector.
     * @param b The second vector.
     */
    static distance(a, b) {
        let diff = a.clone().subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    }
    /**
     * Copies the contents of the provided vector to this vector.
     * @param v The vector to copy from.
     */
    copyFrom(v) {
        this._x = v._x;
        this._y = v._y;
    }
    /** Returns the data of this vector as a number array. */
    toArray() {
        return [this._x, this._y];
    }
    /** Returns the data of this vector as a Float32Array. */
    toFloat32Array() {
        return new Float32Array(this.toArray());
    }
    /** Converts this vector2 to a vector3, with the z component set to 0. */
    toVector3() {
        return new Vector3_1.Vector3(this._x, this._y, 0);
    }
    /**
     * Sets the x and y values of this vector.
     * @param x The x value. Optional.
     * @param y The y value. Optional.
     */
    set(x, y) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
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
    }
    /**
     * Adds the provided vector to this vector.
     * @param v The vector to be added.
     */
    add(v) {
        this._x += v._x;
        this._y += v._y;
        return this;
    }
    /**
     * Subtracts the provided vector from this vector.
     * @param v The vector to be subtracted.
     */
    subtract(v) {
        this._x -= v._x;
        this._y -= v._y;
        return this;
    }
    /**
     * Multiplies this vector by the provided vector.
     * @param v The vector to be multiplied by.
     */
    multiply(v) {
        this._x *= v._x;
        this._y *= v._y;
        return this;
    }
    /**
     * Divides this vector by the provided vector.
     * @param v The vector to be divided by.
     */
    divide(v) {
        this._x /= v._x;
        this._y /= v._y;
        return this;
    }
    /**
     * Scales this vector by the provided number.
     */
    scale(scale) {
        this._x *= scale;
        this._y *= scale;
        return this;
    }
    /** Clones this vector. */
    clone() {
        return new Vector2(this._x, this._y);
    }
}
exports.Vector2 = Vector2;
//# sourceMappingURL=Vector2.js.map