const {expect} = require('chai')
const firstNonRepeat = require('./index')

describe("First non repeating character", function () {

    it('should return an empty string', function () {
        expect(firstNonRepeat('')).to.equal('')
    });

    it('should return a ', function () {
        expect(firstNonRepeat('a')).to.equal('a')
    });

    it('should return g', function () {
        expect(firstNonRepeat('oh my god dude where is my car')).to.equal('g')
    });
})
