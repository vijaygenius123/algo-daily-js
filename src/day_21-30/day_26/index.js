function Node(val) {
    this.val = val;
    this.next = null;
}

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

    isPresent(val) {
        let head = this.head;
        while (head) {
            if (head.val === val) {
                return true;
            }
            head = head.next;
        }
        return false;
    }

    toArray() {
        const toPrint = [];
        let currNode = this.head;
        while (currNode) {
            toPrint.push(currNode.val);
            currNode = currNode.next;
        }
        return toPrint;
    }

    toString() {
        const toPrint = [];
        let currNode = this.head;

        while (currNode) {
            toPrint.push(currNode.val);
            currNode = currNode.next;
        }

        return toPrint.join(' -> ');
    }
}

function getIntersection(list1, list2) {
    const newList = new LinkedList();
    let node = list1.head;
    while(node){
        const val = node.val;
        if(list2.isPresent(val)){
            newList.append(val);
        }
        node = node.next;
    }
    return newList;
}

module.exports = {LinkedList, Node, getIntersection}
