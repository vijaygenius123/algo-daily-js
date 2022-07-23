# Is A Subsequence (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Given two strings, one named sub and the other str, determine if sub is a subsequence of str.

```js
const str = "barbell"
const sub = "bell"
isASubsequence(sub, str);
// true
```
For the sake of the exercise, let's assume that these strings only have lower case characters.

What is subsequence? You can think of it as a substring, but the letters don't have to be adjacent. It is formed from the base string by deleting some or none of the characters without affecting the relative positions of the other letters. So this also works:

```js
const str = "chicken"
const sub = "hen"
isASubsequence(sub, str);
// true
```
## Constraints
- Length of both the strings <= 100000
- The strings will contain only alphanumeric characters (a-z , A-Z, 0-9)
- The strings can be empty
- Expected time complexity : O(n)
- Expected space complexity : O(1)
