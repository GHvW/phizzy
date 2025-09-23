import { Vec2 } from "dim-sum";

export class BBox {

    position: Vec2;
    height: number;
    width: number;


    constructor(position: Vec2, width: number, height: number) {
        this.position = position;
        this.height = height;
        this.width = width;
    }

    intersects(other: BBox): boolean {
        return this.position.x + this.width >= other.position.x
            && this.position.x <= other.position.x + other.width
            && this.position.y + this.height >= other.position.y
            && this.position.y <= other.position.y + other.height;
    }
}

