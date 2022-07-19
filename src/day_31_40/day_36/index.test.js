const {expect} = require('chai')
const {Node, identicalTrees} = require('./index')


describe.only("Identical Trees", function () {

    it('should be a function', function () {
        expect(identicalTrees).to.be.instanceof(Function)
    });

    it('should return false if trees are not identical', function () {
        let tree1 = new Node(4);
        tree1.left = new Node(1);
        tree1.right = new Node(3);

        let tree2 = new Node(5);
        tree2.left = new Node(10);
        tree2.left.left = new Node(17);
        tree2.left.right = new Node(3);
        tree2.right = new Node(8);

        expect(identicalTrees(tree1, tree2)).to.eql(false)
    });

    it('should return true if trees are identical', function () {
        let tree = new Node(6);
        tree.left = new Node(3);
        tree.right = new Node(8);

        let treeClone = new Node(6);
        treeClone.left = new Node(3);
        treeClone.right = new Node(8);
        expect(identicalTrees(tree, treeClone)).to.eql(true);
    });

    it('should return false if trees are not identical', function () {
        let tree1 = new Node(4);
        tree1.left = new Node(1);
        tree1.left.left = new Node(1);
        tree1.right = new Node(3);

        let tree2 = new Node(4);
        tree2.left = new Node(1);
        tree2.right = new Node(3);

        expect(identicalTrees(tree1, tree2)).to.eql(false)
    });
})
