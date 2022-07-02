const {expect} = require('chai')
const uniques = require('./index')

describe("Remove Duplicates From Array", function () {

    it('should return array without duplicates', function () {
        expect(uniques([8, 8, 15, 6, 19, 7, 12, 6, 6, 3, 13, 9, 15, 14, 1, 13, 4, 11, 16]))
            .to.deep.eq([8, 15, 6, 19, 7, 12, 3, 13, 9, 14, 1, 4, 11, 16])
    });

    it('should return array without duplicates', function () {
        expect(uniques([12, 7, 2, 20, 20, 2, 15, 20, 2, 10, 12, 1]))
            .to.deep.eq([12, 7, 2, 20, 15, 10, 1])
    });

    it('should return array without duplicates', function () {
        expect(uniques([6, 12, 5, 1, 4, 18, 10, 17, 10, 0, 1, 7, 6, 18, 11, 2, 15, 19]))
            .to.deep.eq([6, 12, 5, 1, 4, 18, 10, 17, 0, 7, 11, 2, 15, 19])
    });

    it('should return array without duplicates', function () {
        expect(uniques([
            9, 0, 11, 16, 19, 14, 7, 18, 10, 6, 0, 17, 12, 9, 12, 18, 0, 14, 17,
        ])).to.deep.eq([9, 0, 11, 16, 19, 14, 7, 18, 10, 6, 17, 12])
    });

    it('should return array without duplicates', function () {
        expect(uniques([5, 10, 3, 17, 9, 12, 19, 4, 16, 19, 7, 9, 7, 8, 10]))
            .to.deep.eq(
            [5, 10, 3, 17, 9, 12, 19, 4, 16, 7, 8]
        )
    });

})
