function LinkedListNode(val) {
    this.val = val;
    this.next = null;
}

function createNodes(head, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        let newNode = new LinkedListNode(nodes[i]);
        head.next = newNode;
        head = newNode;
    }
}

function toArray(head){
    let nodes = [], current = head
    while(current){
        nodes.push(current.val)
        current = current.next
    }
    return nodes
}

function removeNodes(head, val) {
    let current = head;
    while(current){
        if(current.next && current.next.val === val){
           current.next = current.next.next;
        }
        current = current.next;
    }
    return head;
}

module.exports = {removeNodes, createNodes, LinkedListNode, toArray}
