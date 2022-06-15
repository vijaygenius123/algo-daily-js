var assert = require('assert');
const reverseOnlyAlphabetical = require('./index')


describe("Reverse ony alphabet", () => {

    it('should be a function', function () {
        assertIsFunction(
            reverseOnlyAlphabetical,
            'reverseOnlyAlphabetical is a function');
    });

    it('should reverse alphabets only 1', function () {
        assert.equal(
            reverseOnlyAlphabetical('sea!$hells3'),
            'sll!$ehaes3',
            "reverseOnlyAlphabetical('sea!$hells3') should equal 'sll!$ehaes3'");
    });

    it('should reverse alphabets only 2', function () {
        assert.equal(
            reverseOnlyAlphabetical('1kas90jda3'),
            '1adj90sak3',
            "reverseOnlyAlphabetical('1kas90jda3') should return '1adj90sak3'"
        )
        ;
    });
});

function assertIsFunction(f) {
    return typeof f === 'function';
}

