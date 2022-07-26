const {expect} = require('chai')
const stockOptimizer = require('./index')

describe("Stock Buy and Sell Optimization", function (){

    it('should be an function', function () {
        expect(stockOptimizer).to.be.instanceof(Function)
    });

    it('should return 0 if no profit', function () {
        expect(stockOptimizer([3, 2, 1])).to.eql(0)
    });

    it('should return 1 ', function () {
        expect(stockOptimizer([1, 2, 3])).to.eql(2)
    });

    it('should return correct profit', function () {
        expect(stockOptimizer([5, 20, 15, 13, 3, 15, 5, 10])).to.eql(15)
        expect(stockOptimizer([1, 6, 11, 2])).to.eql(10)
        expect(stockOptimizer([15, 5, 2, 0, 5, 8, 7, 4, 2, 10, 1])).to.eql(10)
        expect(stockOptimizer([14, 3, 16, 8, 9, 7, 8, 18, 15, 10, 9])).to.eql(15)
    });


})
