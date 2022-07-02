# Dollar Sign Deletion (Medium)
Good afternoon, vijaygenius123! Here's our prompt for today.

You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

Each of these strings will be run through a method to operate on the $ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

```js
input = ["f$st", "st"]
isDollarDeleteEqual(input);
// true
// true because both become "st"
```
Can you find a solution in O(n) time and constant space?

## Constraints
- The input arrays can be of any size
- Every string has at least a single character
- The string will consist of dollar signs and lowercase alphabets
- Expected overall time complexity : O(n)
- Expected space complexity : O(n) for good solution, O(1) for asymptotically optimal solution
