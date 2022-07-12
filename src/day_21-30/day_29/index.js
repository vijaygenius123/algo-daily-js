function Node(val) {
    this.val = val;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(val) {
        const currentHead = this.head;
        const newNode = new Node(val);
        newNode.next = currentHead;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    append(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    isPresent(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) {
                return true;
            }
            current = current.next
        }
        return false
    }

    toArray() {
        const arr = []
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

    toPrint() {
        const arr = this.toArray()
        return arr.join(' -> ')
    }
}
function createFromArray(arr){
    const linkedList = new LinkedList()
    for(let i =0; i < arr.length; i++){
        linkedList.append(arr[i])
    }
    return  linkedList
}

function getUnion(list1, list2) {
    // implement a method to get the union
    const linkedList = new LinkedList();
    let list1Current = list1.head || null,
        list2Current = list2.head || null;
    while(list1Current){
        if(!linkedList.isPresent(list1Current.val))
        linkedList.append(list1Current.val);
        list1Current = list1Current.next;
    }
    while(list2Current){
        if(!linkedList.isPresent(list2Current.val))
            linkedList.append(list2Current.val);
            list2Current = list2Current.next;
    }
    return linkedList;
}

module.exports = {
    LinkedList,
    createFromArray,
    getUnion
}
