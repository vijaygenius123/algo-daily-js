# Product Except Self (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

If we are given an array of integers, can you return an output array such that each corresponding input's elements returns the product of the input array except itself?


This can be hard to explain, so let's take an array: [1, 2, 4, 16]

What we want to return is [128, 64, 32, 8]. This is because 2 x 4 x 16 = 128, 1 x 4 x 16 = 64, 1 x 2 x 16 = 32, and 1 x 2 x 4 = 8. At each index, we ignore the number at that index and multiply the rest.

In other words, output[i] is equal to the product of all the elements in the array other than input[i].

Can you solve this in O(n) time without division?

## Constraints
- Length of the array will be <= 100000
- The array can be empty
- The array will only contain non zero positive values
- The answer for each index will fit in the integer range
- Expected time complexity : O(n)
- Expected space complexity : O(n)
