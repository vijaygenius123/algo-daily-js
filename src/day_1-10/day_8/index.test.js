const {expect} = require('chai')
const lonelyNumber = require('./index')

describe('Lonely number', function () {

    it('should be a function', function () {
        expect(lonelyNumber).to.be.instanceof(Function)
    });

    it('should return the lonely number 1', function () {
        expect(lonelyNumber([1])).to.equal(1);
    });

    it('should return the lonely number 2', function () {
        expect(lonelyNumber([4, 4, 6, 1, 3, 1, 3])).to.equal(6);
    });

    it('should return the lonely number 3', function () {
        expect(lonelyNumber([3, 3, 9])).to.equal(9);
    });

    it('should return the lonely number 4', function () {
        expect(lonelyNumber([4, 4, 6, 1, 3, 1, 3])).to.equal(6);
    });
})
