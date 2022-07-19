function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function compareNode(node, otherNode, depth) {
    if(node === null && otherNode === null) return true;
        if ((node && node.val) === (otherNode && otherNode.val)) {
            const left =  compareNode(node.left, otherNode.left, depth + 1);
            const right =  compareNode(node.right, otherNode.right, depth + 1);
            return left && right;
        } else {
            return false;
        }
}

function identicalTrees(tree1, tree2) {
    let result
    result = compareNode(tree1, tree2, 0)
    return result;
}

module.exports = {Node, identicalTrees}
