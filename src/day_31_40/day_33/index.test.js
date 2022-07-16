const {expect} = require('chai')
const {Node, isValidBST} = require('./index')

describe("Validate a BST ", function () {

    it('should return false for an invalid tree', function () {
        /**
         *      4
         *    1   3
         */
        let tree1 = new Node(4);
        tree1.left = new Node(1);
        tree1.right = new Node(3);
        expect(isValidBST(tree1)).to.eql(false)
    });

    it('should return false for an invalid tree', function () {
        /**
         *          5
         *      10     8
         *   17   3
         */
        let tree2 = new Node(5);
        tree2.left = new Node(10);
        tree2.left.left = new Node(17);
        tree2.left.right = new Node(3);
        tree2.right = new Node(8);
        expect(isValidBST(tree2)).to.eql(false)
    });

    it('should return true for an invalid tree', function () {
        /**
         *       6
         *     3   9
         */
        let tree3 = new Node(6);
        tree3.left = new Node(3);
        tree3.right = new Node(9);
        expect(isValidBST(tree3)).to.eql(true)
    });

    it('should return false for an invalid tree', function () {
        /**
         *           5
         *         3
         *       2
         *     1
         */
        let tree4 = new Node(5);
        tree4.left = new Node(3);
        tree4.left.left = new Node(2);
        tree4.left.left.left = new Node(1);
        expect(isValidBST(tree4)).to.eql(true)
    });

    it('should return false for an invalid tree', function () {
        /**
         *             8
         *         6       9
         *       5   7       10
         */
        let tree5 = new Node(8);
        tree5.left = new Node(6);
        tree5.right = new Node(9);
        tree5.left.left = new Node(5);
        tree5.left.right = new Node(7);
        tree5.right.right = new Node(10);
        expect(isValidBST(tree5)).to.eql(true)
    });

})
