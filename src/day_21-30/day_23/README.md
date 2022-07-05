# Least Missing Positive Number (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

We have an unsorted array of integers such as the following:

```js
[0, 3, -1, -2, 1]
```
In the above example, the minimum number is -2 and the maximum is 3. If it were sorted, it would look like:

```js
[-2, -1, 0, 1, 3]
```
This means there is an expected range (defined as the collection of values between the minimum and maximum values) of [-2, -1, 0, 1, 2, 3] for the array.

But look at the example again:

```
[-2, -1, 0, 1, 3]
```
We're missing a number: 2. The smallest missing positive integer for our input array is 2.


Can you write a method that takes such an array and returns the first missing positive integer?

```js
leastMissingPositive([1, 2, 3, 0])
// 4
```
In the above example, it is 4 since we already have 0 through 3. Have your code run in O(n) time with constant space (hence, we can easily determine if it was sorted, but most sorts will take O(n * log n) time).

## Constraints
- Length of the array <= 100000
- The array can be empty
- The array will contain values between -100000 and 100000
- The final answer will always fit in the integer range
- Expected time complexity : O(n)
- Expected space complexity : O(1)
