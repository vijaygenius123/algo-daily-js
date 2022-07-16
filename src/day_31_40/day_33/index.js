function isValidNode(node, left, right) {
    if (node === null) return true
    if (node.val < left || node.val > right) return false;
    return isValidNode(node.left, left, node.val) && isValidNode(node.right, node.val, right)
}

function isValidBST(self) {
    return isValidNode(self, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}


function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

module.exports = {
    Node, isValidBST
}
