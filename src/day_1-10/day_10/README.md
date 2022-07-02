# Binary Tree Inorder Traversal (Easy)
Good morning, vijaygenius123! Here's our prompt for today.

Can you write a function to traverse a binary tree in-order, and print out the value of each node as it passes?

```
  4
   \
    5
   /
  6
```
The example would output [4, 6, 5] since there is no left child for 4, and 6 is visited in-order before 5.


The definition of a tree node is as follows:

```javascript
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
```
Follow up: you'll likely get the recursive solution first, could you do it iteratively?

## Constraints
- Number of vertices in the tree <= 100000
- The values of the vertices in the tree will be between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(1)
