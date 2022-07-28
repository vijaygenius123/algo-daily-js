# Max Leaps in Jump Game (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

We have an array that model square blocks on a city street. On each block is a non-negative whole number.


Ever heard of hopscotch? Picture that as an array:
```js
[1, 3, 2, 2, 1]
```
Now, in hopscotch, you need to jump in patterns from the start to the end of the boxes. We can model that behavior in the above array-- so we begin at the first index and see the number 1.

Let also assume that each integer in the array represents a maximum jump length from that index. So at index 0, we encounter the value 1, and thus can jump 1 time to the next block. This lets us make our way over to index 1 (which contains 3).

```
arr = [1, 3, 2, 2, 1]
idx    0, 1, 2, 3, 4
```
However, with numbers greater than 1, we don't always have to take the maximum leap. At index 1, since the max jump is 3, we can choose to jump either 1, 2, or 3 squares (but no more than that).

Example 1

Following this logic, can you write an algorithm that determines if we are able to make it until the very end? In our example of [1, 3, 2, 2, 1], we can make the following moves:

`1` leap from index `0` to `1`
`3` leaps that get us from index `1` to `4`
Since we can get to index 4, we would return true.

Example 2

On the other hand, here's an example that wouldn't work:

```js
[2, 1, 0, 1, 4]
```

Regardless of whether we jump once or twice at the first element, we have to end up at index 2. Then, because the max jump at index 2 is 0, we can never progress beyond that, and thus would return false.

## Constraints
- Length of the array <= 100000
- The values of the array will be between 0 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(1)
