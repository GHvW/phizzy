import { Vec2 } from "dim-sum";

export class BBox {

    min: Vec2;
    max: Vec2;

    constructor(min: Vec2, max: Vec2) {
        this.min = min;
        this.max = max;
    }

    intersects(other: BBox): boolean {
        return this.max.x >= other.min.x
            && this.min.x <= other.max.x
            && this.max.y >= other.min.y
            && this.min.y <= other.max.y
    }
}

