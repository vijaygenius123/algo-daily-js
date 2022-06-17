# Validate Palindrome (Easy)
Good morning, vijaygenius123! Here's our prompt for today.

Given a string str, can you write a method that will return True if is a palindrome and False if it is not? If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward". For now, assume that we will not have input strings that contain special characters or spaces, so the following examples hold:

```js
let str = 'thisisnotapalindrome';
isPalindrome(str);
// false

str = 'racecar';
isPalindrome(str);
// true
```
For an extra challenge, try to ignore non-alphanumerical characters. The final solution that we present will handle all edge cases.

## Constraints
- Length of the given string <= 100000
- The string will consist of ASCII characters (some or all)
- Expected time complexity : O(n)
- Expected space complexity : O(1)
