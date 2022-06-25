const {expect} = require('chai')
const isDollarDeleteEqual = require('./index')

describe("Dollar Sign Deletion", function (){

    it('should return true', function () {
        expect(isDollarDeleteEqual(['f$ec', 'ec'])).to.equal(true)
    });

    it('should return true', function () {
        expect(isDollarDeleteEqual(['ab$$', 'c$d$'])).to.equal(true)
    });

    it.skip('should return true', function () {
        expect(isDollarDeleteEqual(['b$$p', '$b$p'])).to.equal(true)
    });

    it('should return false', function () {
        expect(isDollarDeleteEqual(['a90$n$c$se', 'a90n$cse'])).to.equal(false)
    });
})
