const { expect} = require('chai')
const twoSum = require('./index')

describe("Two Sum", function (){

    it('should return the right indices', function () {
        expect(twoSum([1, 9, 13, 20, 47], 10)).to.deep.eq([0, 1])
    });

    it('should return the right indices', function () {
        expect(twoSum([3, 2, 4, 1, 9], 12)).to.deep.eq([0, 4])
    });

    it('should return the right indices', function () {
        expect(twoSum([3, 2, 4, 1, 9], 12)).to.deep.eq([0, 4])
    });

    it('should return the right indices', function () {
        expect(twoSum([], 110)).to.deep.eq([])
    });

})
