const assert = require('assert')
const majorityElement = require('./index')

describe("Majority Element", function () {

    it('should return the majority correctly 1', function () {
        assert.equal(majorityElement([1, 4, 2, 4, 4, 3, 4]), 4);
    });

    it('should return the majority correctly 2', function () {
        assert.equal(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]), 1);
    });

    it('should return the majority correctly 1', function () {
        assert.equal(majorityElement([5, 4, 4, 4, 3, 3, 3, 3, 3]), 3);
    });
})
