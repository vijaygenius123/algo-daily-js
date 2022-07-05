const {expect} = require('chai')
const leastMissingPositive = require('./index')

describe("Least Missing Positive Number ", function (){

    it('should return 2', function () {
        expect(leastMissingPositive([3, 5, -1, 1])).to.eq(2)
    });

    it('should return 1', function () {
        expect(leastMissingPositive([5, 6, 7, 8, 9])).to.eq(1)
    });

    it('should return 2', function () {
        expect(leastMissingPositive([])).to.eq(1)
    });

})
