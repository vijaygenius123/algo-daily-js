# Treats Distribution (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Say we are given an integer array of an even length, where different numbers in the array represent certain kinds of snacks or treats. Each number maps to, or represents, one kind of snack. So the following array would have two kinds: snack type 3 and type 2:

```JAVASCRIPT
const snacks = [3, 3, 2, 2];
```
You need to distribute these snacks equally in number to a brother and sister duo. Write an algorithm treatsDistribution(snacks: array) to return the maximum number of unique kinds of snacks the sister could gain.

```JAVASCRIPT
const snacks = [2, 2, 3, 3, 4, 4];
treatsDistribution(snacks);
// 3
```
In the above example, there are three different kinds of snacks (2, 3, and 4), and a quantity of two each. Thus, the sister can have snacks [2, 3, 4] and the brother will have snacks [2, 3, 4] as well. The sister has at most 3 different unique kinds of snacks, so the answer is 3.

```JAVASCRIPT
const snacks = [1, 1, 2, 4]
treatsDistribution(snacks)
// 2
```
In this example, the sister can have a collection of snacks consisting of [2, 4] and the brother has snack collection [1, 1]. The sister can have up to 2 different kinds of snacks, while the brother has only 1 kind of snacks.

You may assume that the length of the given array is in range is even, and that there's less than 10,000 elements.

## Constraints
- Length of the array <= 100000
- The values in the array between -1000000000 and 1000000000
- Expected time complexity : O(n)
- Expected space complexity : O(n)
