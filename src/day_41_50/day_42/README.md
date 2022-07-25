# Sorted Two Sum (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

The setup is the same as Two Sum-- you're given an array of numbers, and a "goal" number.

Write a method to return an array of the indexes of the two elements in the array that sum up to the goal. If there are no such elements, return an empty array.

The caveat here is that the numbers are guaranteed to be sorted.


So let's say our goal number was 10. Our numbers to sum to it would be 3 and 7, and their indices 1 and 2 respectively.

```js
let arr = [1, 3, 7, 9, 11];
let goal = 10;
twoSum(arr, goal);
// [1, 2]
```
Is there an efficient way to figure this out?

## Constraints
- Length of the array <= 100000
- The array will always contain integer values between -1000000000 and 1000000000
- The required sum is will be well within the integer range
- Expected time complexity : O(n)
- Expected space complexity : O(1)
