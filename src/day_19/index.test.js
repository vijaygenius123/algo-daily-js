const {expect} = require('chai')
const getMinimum = require('./index')

describe("Fast Minimum In Rotated Array", function (){

    it('should return the right value', function () {
        expect(getMinimum([6, 7, 8, 0, 1, 2, 3, 4, 5])).to.deep.eq(0);
    });

    it('should return 3', function () {
        expect(getMinimum([6, 7, 8, 9, 10, 3, 4, 5])).to.deep.eq(3);
    });
})
