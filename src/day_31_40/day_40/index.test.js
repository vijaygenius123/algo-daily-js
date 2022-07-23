const {expect} = require('chai')
const isASubsequence = require('./index')

describe("Is A Sub Sequence", function () {

    it('should be an function', function () {
        expect(isASubsequence).to.be.instanceof(Function)
    });

    it('should return false when substring is bigger than string', function () {
        expect(isASubsequence('aaaaaa', '')).to.eql(false)
    });

    it('should return true', function () {
        expect(isASubsequence('c', 'co')).to.eql(true)
        expect(isASubsequence('ej', 'sej')).to.eql(true)
        expect(isASubsequence('ej', 'seij')).to.eql(true)
    });

    it('should return false', function () {
        expect(isASubsequence('liblu', 'egi')).to.eql(false)
    });
})
