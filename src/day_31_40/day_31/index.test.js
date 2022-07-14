const { expect } = require('chai')
const { MyLinkedList, listToString} = require('./index')

describe("Linked List", function (){

    it('should return LinkedList 1', function () {
        let linkedList1 = new MyLinkedList();
        linkedList1.prepend(25);
        linkedList1.prepend(15);
        linkedList1.prepend(5);
        linkedList1.prepend(9);

        expect(listToString(linkedList1.head)).to.eql('9 -> 5 -> 15 -> 25')
    });

    it('should return LinkedList 2', function () {
        let linkedList2 = new MyLinkedList();
        linkedList2.prepend(25);
        linkedList2.prepend(15);
        linkedList2.prepend(5);
        linkedList2.prepend(9);

        linkedList2.append(15);
        linkedList2.append(5);
        linkedList2.append(9);
    expect( listToString(linkedList2.head)).to.eql('9 -> 5 -> 15 -> 25 -> 15 -> 5 -> 9')
    });

    it('should return LinkedList 2', function () {
        let linkedList3 = new MyLinkedList();
        linkedList3.prepend(15);
        linkedList3.append(5);
        linkedList3.prepend(7);
        linkedList3.append(19);
        expect( listToString(linkedList3.head)).to.eql( '7 -> 15 -> 5 -> 19')
    });

})
