# Max Per Level (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Given a binary tree, write a method to return an array containing the largest (by value) node values at each level. In other words, we're looking for the max per level.


So for instance, given the following binary tree, we'd get [2, 7, 9] if the method grabbed the correct maxes.

```js
/*
       2
      / \
     3   7
    / \   \  
   5   8   9
*/

maxValPerLevel(root);
// [2, 7, 9]
```
Assuming the standard tree node definition of:

```js
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}
```
Can you fill it out via the following function signature?

```js
function maxValPerLevel(root) {
  // if (!root) { return []; }

  return;
};
```

## Constraints
- The number of nodes in the given tree <= 100000
- The nodes will always contain integer values between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(n)
