const assert = require('assert')
const reverseString = require('./index')


try {
    assert.equal(
        reverseString('njnschnjkdasn j32 uida'),
        'adiu 23j nsadkjnhcsnjn'
    );

    console.log(
        'PASSED: ' +
        "`reverseString('njnschnjkdasn j32 uida')` should return `'adiu 23j nsadkjnhcsnjn'`"
    );
} catch (err) {
    console.log(err);
}

try {
    assert.equal(reverseString('timbuktu12'), '21utkubmit');

    console.log(
        'PASSED: ' + "`reverseString('timbuktu12')` should return `'21utkubmit'`"
    );
} catch (err) {
    console.log(err);
}

try {
    assert.equal(reverseString(''), '');

    console.log('PASSED: ' + "`reverseString('')` should return `''`");
} catch (err) {
    console.log(err);
}

try {
    assert.equal(reverseString('reverseastring'), 'gnirtsaesrever');

    console.log(
        'PASSED: ' +
        "`reverseString('reverseastring')` should return `'gnirtsaesrever'`"
    );
} catch (err) {
    console.log(err);
}
