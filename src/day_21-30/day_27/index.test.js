const {expect} = require('chai')
const {LinkedListNode, createNodes, fetchRandomNode} = require('./index')

describe("Get Random Node", function (){
    let list1, list2
    beforeEach(function (){
        list1 = new LinkedListNode(3);
        const nodes1 = [4, 5, 6, 7, 8, 9, 10];
        createNodes(list1, nodes1);
        list2 = new LinkedListNode(1);
        const nodes2 = [2, 3, 4, 5, 6, 7, 8];
        createNodes(list2, nodes2);
    })

    it('should not be the same node', function () {
        expect(fetchRandomNode(list1)).to.not.equal(fetchRandomNode(list1))
    });

    it('should not be the same node', function () {
        expect(fetchRandomNode(list2)).to.not.equal(fetchRandomNode(list2))
    });
})
