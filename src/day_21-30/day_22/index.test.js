const {expect} = require('chai')
const treatsDistribution = require('./index')

describe("Treats Distribution", function () {

    it('should return 3', function () {
        expect(treatsDistribution([2, 2, 3, 3, 4, 4])).to.eq(3)
    });

    it('should return 2', function () {
        expect(treatsDistribution([1, 1, 2, 4])).to.eq(2)
    });

    it('should return 1', function () {
        expect(treatsDistribution([7, 7])).to.eq(1)
    });

})
