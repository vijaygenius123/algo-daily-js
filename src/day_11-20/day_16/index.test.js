const {expect} = require('chai')
const missingInUnsorted = require('./index')

describe("", function () {

    it('should return the missing number 8 ', function () {
        expect(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)).to.eq(8)
    });

    it('should return the missing number 8 ', function () {
        expect(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 5, 9)).to.eq(8)
    });

    it('should return the missing number 15', function () {
        expect(missingInUnsorted([10, 11, 12, 13, 14, 16], 10, 16)).to.eq(15)
    });

    it('should return the missing number 26', function () {
        expect(missingInUnsorted([21, 28, 23, 25, 27, 24, 22], 21, 28)).to.eq(26)
    });
})
