const { expect } = require('chai')
const { toArray, swapEveryTwo, toList} = require('./index')

describe("Swap Every Two Nodes", function (){

    it('should return empty', function () {
        const nodes = []
        const linkedList = toList(nodes)
        expect(toArray(swapEveryTwo(linkedList))).to.eql([])
    });

    it('should linked list with values swapped', function () {

        const nodes = [3, 4, 5, 6]
        const linkedList = toList(nodes)
        expect(toArray(swapEveryTwo(linkedList))).to.eql([4, 3, 6, 5])
    });

    it('should linked list with values swapped', function () {
        const nodes = [3, 4, 5, 6, 7]
        const linkedList = toList(nodes)
        expect(toArray(swapEveryTwo(linkedList))).to.eql([4, 3, 6, 5, 7])
    });
})
