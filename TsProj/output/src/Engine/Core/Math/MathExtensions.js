Math.clamp = (value, min, max) => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};
Math.degToRad = (degrees) => {
    return degrees * Math.PI / 180.0;
};
Math.radToDeg = (radians) => {
    return radians * 180.0 / Math.PI;
};
//# sourceMappingURL=MathExtensions.js.map