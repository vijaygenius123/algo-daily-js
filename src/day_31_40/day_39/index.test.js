const {expect} = require('chai')
const maxProductOfThree = require('./index')

describe("Max product of three numbers", function (){

    it('should be an function', function () {
        expect(maxProductOfThree).to.be.instanceof(Function)
    });

    it('should return the max product #1', function () {
        expect(maxProductOfThree([0, 1, 2, 3])).to.eql(6)
    });

    it('should return the max product #2', function () {
        expect(maxProductOfThree([-12, -7, -1, 11, 17])).to.eql(1428)
    });

    it('should return the max product #3', function () {
        expect(maxProductOfThree([0, 4, -9, 19, 7, -5])).to.eql(855)
    });

    it('should return the max product #3', function () {
        expect(maxProductOfThree([-1, 9, 22, 3, -15, -7])).to.eql(2310)
    });

})
