const {expect} = require('chai')
const missingNumbers = require('./index')

describe("Missing Numbers", function () {

    it('should return 2 as the missing number', function () {
        expect(missingNumbers([0, 1, 3])).to.deep.eq([2])
    });

    it('should return the missing numbers between 10 and 17', function () {
        expect(missingNumbers([10, 11, 14, 17])).to.deep.eq([12, 13, 15, 16]);
    });

    it('should return the missing numbers ', function () {
        expect(missingNumbers([3, 7, 9, 19])).to.deep.eq([4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18])
    });
})
