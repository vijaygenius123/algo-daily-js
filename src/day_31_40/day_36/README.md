# Identical Trees (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Can you write a function to see if two binary trees are identical?

```
   1         1
  / \       / \
 2   3     2   3
```
The above two trees share the same structure in terms of shape and location of each parent nodes' children.


Additionally, each corresponding nodes at every position has the exact same value. Thus, the above is consideredidentical.

The below two are not identical, because we are missing a child node.

```
   1         1
  / \       /
 1   3     3   
```
The definition of a tree node is as follows:

```js
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
```
## Constraints
- Number of vertices in both the trees <= 100000
- The trees can also be null
- The values of the vertices in the tree will be between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(n)
