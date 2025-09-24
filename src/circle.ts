import { Vec2 } from "dim-sum";

export class Circle {

    position: Vec2;
    radius: number;
    
    constructor(position: Vec2, radius: number) {
        this.radius = radius;
        this.position = position;
    }

    intersects(other: Circle): boolean {
        const distanceSquared = this.position.distanceSquaredTo(other.position);
    }
}