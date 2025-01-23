import { Vec2 } from "dim-sum";
export declare class BBox {
    min: Vec2;
    max: Vec2;
    constructor(min: Vec2, max: Vec2);
    intersects(other: BBox): boolean;
}
