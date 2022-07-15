# Fibonacci Sequence (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Implement a function that returns the Fibonnaci number for a given integer input. In a Fibonacci sequence, each number is the sum of the two preceding ones.

The simplest is the series: 1, 1, 2, 3, 5, 8, etc.

This is because:

```txt
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 1 + 1 = 2
fibonacci(4) = 1 + 2 = 3
fibonacci(5) = 2 + 3 = 5
```
So if we were to invoke fibonacci(5), we'd want to return 5 (because the second to last number was 2 + last number was 3).

## Constraints
- The value of n will always be a non negative integer and <=40
- The answer is guaranteed to fit in the integer data type
- Expected time and space complexity are both O(n)
