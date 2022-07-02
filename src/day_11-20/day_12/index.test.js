const {expect} = require('chai')
const detectSubstring = require('./index')

describe("Detect substring in string", function (){

    it('should be an function', function () {
        expect(detectSubstring).to.be.an.instanceof(Function);
    });

    it('should return the right index', function () {
        expect(detectSubstring('thepigflewwow', 'flew')).to.equal(6)
    });

    it('should return the right index', function () {
        expect(detectSubstring('twocanplay', 'two')).to.equal(0)
    });

    it('should return the right index', function () {
        expect(detectSubstring('wherearemyshorts', 'pork')).to.equal(-1)
    });

    it('should return the right index', function () {
        expect(detectSubstring('twocanplay', 'two')).to.equal(0)
    });

})
