const {expect} = require('chai')
const sumDigits = require('./index')

describe("Sum Digits Until One", function (){

    it('should be a function', function () {
        expect(sumDigits).to.be.an.instanceof(Function)
    });

    it('should return the sum of the digits 49', function () {
        expect(sumDigits(49)).to.equal(4)
    });

    it('should return the sum of the digits 439230', function () {
        expect(sumDigits(439230)).to.equal(3)
    });

})
