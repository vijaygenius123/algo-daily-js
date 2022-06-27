const {expect} = require('chai')
const maxOfMinPairs = require('./index')

describe("Max of Min Pairs", function () {

    it('should return the right value 1', function () {
        expect(maxOfMinPairs([3, 4, 2, 5])).to.equal(6)
    });

    it('should return the right value 2', function () {
        expect(maxOfMinPairs([1, 3, 2, 6, 5, 4])).to.equal(9)
    });
})
