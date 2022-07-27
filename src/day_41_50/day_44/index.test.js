const { expect} = require('chai')
const inversions = require('./index')

describe("How Out of Order", function (){

    it('should be an function', function () {
        expect(inversions).to.be.instanceof(Function)
    });

    it('should return the count of inversions', function () {
        expect(inversions([5, 4, 3, 2, 1])).to.eql(10)
        expect(inversions([2, 4, 1, 3, 5])).to.eql(3)
    });
})
