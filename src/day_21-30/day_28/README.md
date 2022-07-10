# Swap Every Two Nodes in a Linked List (Medium)
Good morning, vijaygenius123! Here's our prompt for today.


Write a recursive algorithm that swaps every two nodes in a linked list. This is often called a pairwise swap. For example:

```js
/*
original list
1 -> 2 -> 3 -> 4

after swapping every 2 nodes
2 -> 1 -> 4 -> 3
*/
````
You may assume that the definition of a linked list node is:

```js
function Node(val) {
  this.value = val;
  this.next = null;
}
```
The method will be invoked as such after setup:

```js
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);

swapEveryTwo(list);
```
## Constraints
- Length of the linkedlist <= 100000
- The nodes will always contain integer values between -1000000000 and 1000000000
- The list can be empty
- Expected time complexity : O(n)
- Expected space complexity : O(n)

**Note**: The strength of linked lists is that you can dynamically add or remove any nodes within a constant time, given the address of the node. This is not possible in arrays or a sequential memory holding data structure. Each node in a linked list is created dynamically on the heap section of the memory. For this reason, you can create a very large Linked List (most probably larger than an array of the same size) as long as you have a memory to allocate. Creating more nodes than your memory can store will result in a heap overflow.
