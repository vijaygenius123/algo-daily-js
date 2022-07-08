const { expect} = require('chai')
const {LinkedList, getIntersection} = require('./index')

describe("Intersection of Two Linked Lists", function (){

    it('should ', function () {
        let list1 = new LinkedList();
        list1.prepend(25);
        list1.prepend(15);
        list1.prepend(5);
        list1.prepend(9);
        let list2 = new LinkedList();
        list2.prepend(14);
        list2.prepend(15);
        list2.prepend(7);
        list2.prepend(13);

        expect(getIntersection(list1, list2).toArray()).to.have.members([15])
    });
})
