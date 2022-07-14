function LinkedListNode(val) {
    this.val = val;
    this.next = null;
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        // prepend a value
        const currentHead = this.head
        let node = new LinkedListNode(value)
        node.next = currentHead;
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
    }

    append(value) {
        // append a value
        const node = new LinkedListNode(value)
        if(!this.head) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    toString() {
        // helper method
        const toPrint = [];
        let currNode = this.head;

        while (currNode) {
            toPrint.push(currNode.val);
            currNode = currNode.next;
        }

        return toPrint.join(' -> ');
    }
}

function listToString(head) {
    var toPrint = [];
    var currNode = head;
    while (currNode) {
        toPrint.push(currNode.val);
        currNode = currNode.next;
    }
    return toPrint.join(' -> ');
}

module.exports = {
    MyLinkedList,
    LinkedListNode,
    listToString
}
