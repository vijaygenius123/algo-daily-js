# Mean Per Level (Medium)
Good afternoon, vijaygenius123! Here's our prompt for today.

We are given a binary tree and are tasked with writing a method that determines the average of every level in the tree. So for instance, given the following binary tree, we'd get [2, 5, 7] if the method grabbed the correct means.


```js
/*
       2
      / \
     3   7
    / \   \  
   4   8   9
*/

meanOfLevels(root);
// [2, 5, 7]
```

You may assume the standard tree node definition of:

```js
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new Node(2);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(8);
root.right.right = new Node(9);
console.log(meanOfLevels(root));
```
## Constraints
- The nodes will always contain integer values between -1000000000 and 1000000000
- In case the division is not proper, add the quotient to the list and ignore the remainder
- You may assume that while adding the numbers, the sum will not overflow the integer range
- Expected time and space complexity : O(n) for both
- In case the tree is null, return an empty list
