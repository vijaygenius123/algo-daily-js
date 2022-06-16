const assert = require('assert')
const isAnagram = require('./index')

describe('isAnagram', function (){

    it('should return true for an anagram', function () {
            assert.equal(isAnagram(
                'Mary', 'Army'
            ), true)
    });

    it('should return true for an anagram', function () {
        assert.equal(isAnagram('cinema', 'iceman'), true);
    })

    it('should return false for not an anagram', function () {
        assert.equal(isAnagram('jake', 'jay'), false);
    });

})
