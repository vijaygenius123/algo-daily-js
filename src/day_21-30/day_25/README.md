# Two Sum (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

This is a classic and very common interview problem. Given an array of integers, return the indices of the two numbers in it that add up to a specific "goal" number.

Suppose we had an array [1, 3, 6, 7, 9], and let's say our "goal" number was 10. Our numbers to sum to it could be 3 and 7, and we would return an array of indices 1 and 3 respectively.

```javascript
let arr = [1, 3, 6, 7, 9];
let goal = 10;
twoSum(arr, goal);
// [1, 3]
```
You may assume that each input would have exactly one solution. Additionally, you may not use the same element twice towards the sum. This means if given [1, 3] and a goal of 2, you cannot use 1 twice and return its index twice as [0, 0].

Note that you cannot guarantee the array is sorted.

AlgoDaily partner CodeTips.co.uk has kindly provided a guide on solving Two Sum in Go. Check it out for even deeper coverage of this problem.

## Constraints
- Length of the array <= 100000
- The values of the array will be between -1000000000 and 1000000000
- The array can be empty
- The target sum will be between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(n)
