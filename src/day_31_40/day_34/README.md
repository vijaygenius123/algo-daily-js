# Bottom Left Node Value (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Assume we're using a binary tree in writing a video game via Binary Space Partitioning. We need to identify the bottom left leaf, that is-- the leftmost value in the lowest row of the binary tree.


In this example, the bottom left leaf is 3:

```js
/*
    4
   / \
  3   5
*/
```
Assuming the standard node definition of:

```js
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}
```
It would be called as such:

```js
const root = new Node(4);
root.left = new Node(3);
root.right = new Node(5);

function bottomLeftNodeVal(root) { return; };
bottomLeftNodeVal(root);
// 3
```
Here's another example. Let's assume that there's at least the root node available in all binary trees passed as parameters.

```js
/*
      4
     / \
    1   3
       / \
      5   9
*/

const root = new Node(4);
root.left = new Node(1);
root.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(9);

bottomLeftNodeVal(root);
// 5
```
## Constraints
- Nodes in the binary tree <= 100000
- The values in the nodes will be in the range -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(n)
