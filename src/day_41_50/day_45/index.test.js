const {expect} = require('chai')
const maxLeaps = require('./index')

describe("Max Leaps in Jump Game", function (){

    it('should be an function', function () {
        expect(maxLeaps).to.be.instanceof(Function)
    });

    it('should return true', function () {
        expect(maxLeaps([1, 3, 2, 2, 1])).to.eql(true)
    });

    it('should return false', function () {
        expect(maxLeaps([2, 1, 0, 1, 4])).to.eql(false)
    });
})
