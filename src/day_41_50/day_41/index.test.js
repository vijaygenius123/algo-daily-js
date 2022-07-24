const {expect} = require('chai')
const shortestPalindrome = require('./index')

describe("Find Shortest Palindrome Possible", function (){

    it('should be an function', function () {
        expect(shortestPalindrome).to.be.instanceof(Function);
    });

    it('should return the word if already a palindrome', function () {
        expect(shortestPalindrome("racecar")).to.eql("racecar")
    });

    it('should return the shortest palindrome possible', function () {
        expect(shortestPalindrome("bubble")).to.eql("elbbubble")
    });

    it('should return the shortest palindrome possible', function () {
        expect(shortestPalindrome("dasndsadmx")).to.eql("xmdasdndsadmx")
    });

})
