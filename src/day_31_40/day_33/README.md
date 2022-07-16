# Validate a BST (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Given a binary search tree like the one below, can you write a function that will return true if it is valid?


```
    5
   / \
  3   9
 / \
1   4
```
Recall that a BST is valid only given the following conditions:

The left child subtree of a node contains only nodes with values less than the parent node's.
The right child subtree of a node contains only nodes with values greater than the parent node's.
Both the left and right subtrees must also be BSTs.
You can assume that all nodes, including the root, fall under this node definition:

```js
class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}
```
The method may be called like the following:

```js
root = new Node(5);
root.left = new Node(3);
root.right = new Node(9);

console.log(isValidBST(root));
```
## Constraints
- Length of the given tree <= 100000
- The nodes in the tree will always contain integer values between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(logn) or O(d) where d is the depth of the tree
