const { expect } = require('chai')
const fibonacci = require('./index')

describe("Fibonacci Sequence", function (){

    it('should return 1 ', function () {
        expect(fibonacci(1)).to.eql(1)
    });

    it('should return 1597', function () {
        expect(fibonacci(17)).to.eql(1597)
    });

    it('should return 5702887', function (done) {
        done()
        expect(fibonacci(34)).to.eql(5702887)
    });
})
