var assert = require('assert');
const fizzBuzz = require('./index')


describe("Fizzbuzz", function (){

    it('should return an empty string', function () {
        assert.equal(fizzBuzz(0), '');
    });

    it('should return till 7', function () {
        assert.equal(fizzBuzz(7), '12fizz4buzzfizz7');
    });

    it('should return till 15', function () {
        assert.equal(fizzBuzz(15), '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz');
    });

})
