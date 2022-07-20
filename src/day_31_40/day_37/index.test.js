const {expect} = require('chai')
const {Node, maxValPerLevel} = require('./index')

describe("Max Per Level", function () {

    it('should be a function', function () {
        expect(maxValPerLevel).to.be.instanceof(Function)
    });

    it('should return ', function () {
        let tree = new Node(5);
        tree.left = new Node(3);
        tree.left.left = new Node(2);
        tree.left.left.left = new Node(1);

        expect(maxValPerLevel(tree)).to.eql([5, 3, 2, 1])
    });

    it('should return ', function () {
        let tree = new Node(8);
        tree.left = new Node(6);
        tree.right = new Node(9);
        tree.left.left = new Node(5);
        tree.left.right = new Node(7);
        tree.right.right = new Node(10);

        expect(maxValPerLevel(tree)).to.eql([8, 9, 10])
    });
})
