const { expect } = require('chai')
const { createNodes, removeNodes, LinkedListNode} = require('./index')

describe("", function (){

    it('should return a linked list 1', function () {
        let list1 = new LinkedListNode(3);
        let nodes1 = [4, 5, 6, 7, 8, 9, 10];
        let comparelist1 = new LinkedListNode(3);
        let comparenodes1 = [4, 5, 6, 7, 8, 9];
        createNodes(comparelist1, comparenodes1);
        createNodes(list1, nodes1);
        expect(removeNodes(list1, 10)).to.eql(comparelist1)
    });

    it('should return a linked list 2', function () {
        let list2 = new LinkedListNode(1);
        let nodes2 = [2, 3, 4, 5, 6, 7, 8];
        let comparelist2 = new LinkedListNode(1);
        let comparenodes2 = [2, 3, 5, 6, 7, 8];
        createNodes(comparelist2, comparenodes2);
        createNodes(list2, nodes2);
        expect(removeNodes(list2, 4)).to.eql(comparelist2)
    });

})
