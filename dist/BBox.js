"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BBox = void 0;
class BBox {
    min;
    max;
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    intersects(other) {
        return this.max.x >= other.min.x
            && this.min.x <= other.max.x
            && this.max.y >= other.min.y
            && this.min.y <= other.max.y;
    }
}
exports.BBox = BBox;
