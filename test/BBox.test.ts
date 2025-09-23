import { describe, expect, test } from 'vitest';
import { BBox } from '../src/BBox';
import { Vec2 } from 'dim-sum';

describe('Given a bounding box', () => {
    const box = new BBox(new Vec2(10, 10), 15, 5);

    describe("and another box that is outside of it", () => {
        const otherBox = new BBox(new Vec2(1, 1), 5, 5);

        test("when checking if the two intersect", () => {
            expect(box.intersects(otherBox)).toBe(false);
        });
    });

    describe("and another box that overlaps at the top left corner", () => {
        const otherBox = new BBox(new Vec2(5, 5), 6, 6);

        test("when checking if the two intersect", () => {
            expect(box.intersects(otherBox)).toBe(true);
        });
    });

    describe("and another box that overlaps in the bottom right corner", () => {
        const otherBox = new BBox(new Vec2(20, 12), 10, 10);

        test("when checking if the two intersect", () => {
            expect(box.intersects(otherBox)).toBe(true);
        });
    });

    describe("and another box that is completely inside it", () => {
        const otherBox = new BBox(new Vec2(12, 12), 5, 2);

        test("when checking if the two intersect", () => {
            expect(box.intersects(otherBox)).toBe(true);
        });

    });
});