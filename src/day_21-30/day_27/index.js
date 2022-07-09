function LinkedListNode(val){
    this.val = val;
    this.next = null
}

function createNodes(head, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        var newNode = new LinkedListNode(nodes[i]);
        head.next = newNode;
        head = newNode;
    }
}

function fetchRandomNode(headNode) {
    let current = headNode
    let i = 3
    while (current.next){
        if(Math.floor(Math.random()*i) === 0 ){
            console.log(current.val)
            return current
        }
        i++
        current = current.next
    }
    return current
}


module.exports = {
    LinkedListNode, createNodes, fetchRandomNode
}
