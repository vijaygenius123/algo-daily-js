const {expect} = require('chai')
const sumOfPrimes = require('./index')

describe("Sum of primes", function (){

    it('should return the sum of primes until 2', function () {
        expect(sumOfPrimes(2)).to.deep.eq(2)
    });

    it('should return the sum of primes until 30', function () {
        expect(sumOfPrimes(30)).to.deep.eq(129)
    });

    it('should return the sum of primes until 2', function () {
        expect(sumOfPrimes(55)).to.deep.eq(381)
    });
})
