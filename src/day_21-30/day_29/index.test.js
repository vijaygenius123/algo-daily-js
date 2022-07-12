const { expect } = require('chai')
const { createFromArray, getUnion} = require('./index')

describe("Union of Linked List", function (){

    it('should return the union of empty linked list', function () {
        const arr1 = [],
            arr2 = [],
            linkedList1 = createFromArray(arr1),
            linkedList2 = createFromArray(arr2)
        expect(getUnion(linkedList1, linkedList2).toArray()).to.eql([])
    });

    it('should return the union of two linked lists 1', function () {
        const arr1 = [25, 15, 5, 9],
            arr2 = [14, 15, 7, 13],
            result = [5, 7, 9, 13, 14, 15, 25]
        let linkedList1 = createFromArray(arr1),
            linkedList2 = createFromArray(arr2)
        expect(getUnion(linkedList1, linkedList2).toArray()).to.have.members(result)
    });

    it('should return the union of two linked lists 2', function () {
        const arr1 = [1, 1, 1, 1],
            arr2 = [1,1],
            result = [1]
        let linkedList1 = createFromArray(arr1),
            linkedList2 = createFromArray(arr2)
        expect(getUnion(linkedList1, linkedList2).toArray()).to.have.members(result)
    });
})
