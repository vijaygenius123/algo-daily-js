function Node(val) {
    this.val = val;
    this.next = null;
}

function toArray(head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

function toList(arr) {
    if (arr.length === 0) return null;
    const head = new Node(arr[0]);
    for (let i = 1, cur = head; i < arr.length; i++, cur = cur.next) {
        cur.next = new Node(arr[i]);
    }
    return head;
}

function swapEveryTwo(head) {
    let current = head;
    while(current){
        if(current.next) {
            const temp = current.val;
            current.val = current.next.val;
            current.next.val = temp;
        }
        if(current.next) {
            current = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

module.exports = {
    swapEveryTwo,
    toArray,
    toList
}
