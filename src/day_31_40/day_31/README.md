# Implement a Linked List (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Let's implement a linked list, a data structure that serves as one of the fundamental building blocks of many other data structures.


A linked list is defined as a lineardata structurewhere each element is a separate object. Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node.

Traditionally we have the following LinkedListNode class definition:

```js
class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
```
We can readily create a entire linked list by writing statements like:

```js
const list1 = new LinkedListNode(2);
list1.next =  new LinkedListNode(3);
```
This will append the node to the end of our new list, and does the job most of the time. However, what if we wanted to make things cleaner and implement a class to help us append and prepend nodes?

Given the following skeleton for a Linked List class, can you fill in the #append and #prepend methods? We will call .head on an instance of your class to get the head node.

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  prepend(value) {}
  
  append(value) {}
};
```
## Constraints
- The numbers in the node to be added are within the integer limits
- Expected time complexity for appending and prepending : O(1)
- Expected space complexity for appending and prepending : O(1)
