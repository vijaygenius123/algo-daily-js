const assert = require("assert")
const reverseString = require("./index")


describe("", () => {

    it('should reverse an empty string', () => {
        assert.equal(reverseString(''), '');
    })

    it('should reverse a simple string 1', () => {
        assert.equal(
            reverseString('njnschnjkdasn j32 uida'),
            'adiu 23j nsadkjnhcsnjn'
        );
    })

    it('should reverse a simple string 2', () => {
        assert.equal(reverseString('timbuktu12'), '21utkubmit');
    })


    it('should reverse a simple string 3', function () {
        assert.equal(reverseString('reverseastring'), 'gnirtsaesrever');
    });


})




