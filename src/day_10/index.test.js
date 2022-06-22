const {expect} = require('chai')
const {Node, inorderTraversal} = require('./index')

var tree1 = new Node(4);
tree1.left = new Node(1);
tree1.right = new Node(3);

var tree2 = new Node(5);
tree2.left = new Node(10);
tree2.left.left = new Node(17);
tree2.left.right = new Node(3);
tree2.right = new Node(8);

// Binary search trees
var tree3 = new Node(6);
tree3.left = new Node(3);

var tree4 = new Node(5);
tree4.left = new Node(3);
tree4.left.left = new Node(2);
tree4.left.left.left = new Node(1);

var tree5 = new Node(8);
tree5.left = new Node(6);
tree5.right = new Node(9);
tree5.left.left = new Node(5);
tree5.left.right = new Node(7);
tree5.right.right = new Node(10);

describe("Binary Tree Inorder Traversal", function (){

    it('should return correct value for tree2', function () {
        expect(inorderTraversal(tree2)).to.have.members([17, 10, 3, 5, 8]);
    });

    it('should return correct value for tree3', function () {
        expect(inorderTraversal(tree3)).to.have.members([3, 6]);
    });
})
