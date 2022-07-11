# Union of Linked Lists (Medium)
Good afternoon, vijaygenius123! Here's our prompt for today.

Now that we've implemented a Linked List, let's start operating on it! Assume you have a Linked List implementation with this definition:

```js
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	prepend(newVal) {
		const currentHead = this.head;
		const newNode = new Node(newVal);
		newNode.next = currentHead;
		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}
	}

	append(newVal) {
		const newNode = new Node(newVal);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}
```
Can you write a method getUnion to find the union of two linked lists? A union of two sets includes everything in both sets.


So given 1 -> 2 -> 3 and 3 -> 4 -> 5, we'd get 1 -> 2 -> 3 -> 4 -> 5.

# Constraints
- Length of both the linkedlist <= 1000
- The nodes will always contain integer values between -1000000000 and 1000000000
- Let m, n be the lengths of the two lists
- Expected time complexity : O(n*m)
- Expected space complexity : O(n+m)
