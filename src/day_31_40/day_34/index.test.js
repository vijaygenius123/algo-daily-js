const {expect} = require('chai')
const {bottomLeftNodeVal, Node} = require('./index')

describe("", function (){

    it('should return 1', function () {
        var tree = new Node(4);
        tree.left = new Node(1);
        tree.right = new Node(3);
        expect(bottomLeftNodeVal(tree)).to.eql(1)
    });

    it('should return 1', function () {
        let tree = new Node(5);
        tree.left = new Node(3);
        tree.left.left = new Node(2);
        tree.left.left.left = new Node(1);

        expect(bottomLeftNodeVal(tree)).to.eql(1)
    });
})
