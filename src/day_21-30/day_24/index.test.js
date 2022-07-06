const {expect} = require('chai')
const productExceptSelf = require('./index')

describe("Product Except Self", function () {

    it('should return an empty array', function () {
        expect(productExceptSelf([])).to.deep.eq([])
    });

    it('should return an product except self', function () {
        expect(
            productExceptSelf([7, 8, 5, 18, 16, 11, 20]),
        ).to.deep.eq(
            [2534400, 2217600, 3548160, 985600, 1108800, 1612800, 887040]
        )
    });

    it('should return product except self', function () {
        expect(
            productExceptSelf([9, 9, 3, 4, 18, 8, 6, 18, 1, 6, 19]),
        ).to.deep.eq(
            [
                191476224, 191476224, 574428672, 430821504, 95738112, 215410752,
                287214336, 95738112, 1723286016, 287214336, 90699264,
            ]
        )
    });

    it('should return product except self', function () {
        expect(
            productExceptSelf([1, 2, 4, 16])
            ).to.deep.eq(
                [128, 64, 32, 8]
            )
    });


})
