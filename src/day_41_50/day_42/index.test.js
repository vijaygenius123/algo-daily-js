const {expect} = require('chai')
const sortedTwoSum = require('./index')

describe("Sorted Two Sum", function (){

    it('should be an function', function () {
        expect(sortedTwoSum).to.be.instanceof(Function)
    });

    it('should return an empty array', function () {
        expect(sortedTwoSum([1, 9, 13, 20, 47], 6)).to.eql([])
    });

    it('should return the ', function () {
        expect(sortedTwoSum([3, 6, 13, 14], 16)).to.eql([0, 2])
    });

    it('should return the index of values', function () {
        expect(sortedTwoSum([1, 9, 13, 20, 47], 67)).to.eql([3, 4])
    });
})
