const assert = require("assert")
const intersection = require("./index")


function assertSameMembers(a, b) {
    return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
}

describe("Array Intersection", () => {

    it('should return intersection', () => {
        assert.deepEqual(intersection([6, 0, 12, 10, 16], [3, 15, 18, 20, 15]), []);
    })

    it('should return intersection', () => {
        assert.deepEqual(intersection([1, 5, 2, 12, 6], [13, 10, 9, 5, 8]), [5]);
    })

    it('should return intersection', () => {
        assertSameMembers(
            intersection(
                [4, 17, 4, 4, 15, 16, 17, 6, 7],
                [15, 2, 6, 20, 17, 17, 8, 4, 5]
            ),
            [15, 6, 17, 4]
        );
    })


    it('should return intersection', () => {
        assert.deepEqual(intersection([3], [15]), []);
    });

    it('should return intersection', () => {
        assert.deepEqual(intersection([2, 16, 8, 9], [14, 15, 2, 20]), [2]);
    })

})




