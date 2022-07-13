# Delete Nodes From A Linked List (Medium)
Good evening, vijaygenius123! Here's our prompt for today.

Now that we've implemented a linked list, can you write a method that will delete all nodes of a given value?


You're given the following standard structure as the definition of a linked list node:

```js
class LinkedListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
```
The follow scenario is how we would invoke the method with a linked list 1 -> 2 -> 2 -> 5 -> 6. As you can see, running the method results in removing all 2s in the list.


```js
// head = 1 -> 2 -> 2 -> 5 -> 6
// val = 2
removeNodes(head, val);
// 1 -> 5 -> 6
```
## Constraints
- The value of the nodes as well as the value to be deleted are within integer limits (between -1000000000 and 1000000000 )
- After deleting the nodes, you need to return the head of the new linked list
- The given linked list can be null
- In case all nodes are deleted, return null
- Expected time complexity : O(n)
- Expected Space complexity : O(1)
