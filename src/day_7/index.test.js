const powerOfThree = require('./index')
const {expect} = require('chai')
describe("Check if Power of three", function () {

    it('should return true if number is power of three ', function () {
       expect(powerOfThree).to.be.an('function')
    });


    it('should return true if number is power of three ', function () {
        expect(powerOfThree(9)).to.equal(true);
    });

    it('should return true if number is power of three ', function () {
        expect(powerOfThree(9)).to.equal(true);
    });

    it('should return false if number is not a power of three 1', function () {
        expect(powerOfThree(7)).to.equal(false);
    });

    it('should return false if number is not a power of three 2', function () {
        expect(powerOfThree(729)).to.equal(true);
    });
})
