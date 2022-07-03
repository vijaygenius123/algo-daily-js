const {expect} = require('chai')
const subarraySum = require('./index')

describe("Contiguous Subarray Sum", function () {

    it('should return true', function () {
        expect(subarraySum([1, 2, 3], 3)).to.eq(true)
    });

    it('should return false', function () {
        expect(subarraySum([], 3)).to.eq(false)
    });

    it('should return true', function () {
        expect(subarraySum([3, 6, 12, 35], 47)).to.eq(true)
    });
})
