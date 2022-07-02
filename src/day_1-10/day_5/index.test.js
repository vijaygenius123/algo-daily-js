const assert = require('assert')
const isPalindrome = require('./index')

describe("Check If String Is Palindrome", () => {

    it('should return true if string is a palindrome 1', function () {
        assert.equal(isPalindrome('racecar'), true)
    });

    it('should return true if string is a palindrome 2', function () {
        assert.equal(isPalindrome('A Santa Lived As a Devil At NASA'), true);
    });

    it('should return true if string is a palindrome 3', function () {
        assert.equal(isPalindrome('a'), true);
    });


    it('should return false if string is not a palindrome', function () {
        assert.equal(isPalindrome('gold'), false);
    });
})
