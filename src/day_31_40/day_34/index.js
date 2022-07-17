function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let result
let maxLevel = 0

function getLeftValue(node, depth, isLeft = false) {
    if (node === null) return
    if (isLeft === true && depth > maxLevel) {
        result = node.val;
        maxLevel = depth;
    }
    getLeftValue(node.left, depth + 1, true)
    getLeftValue(node.right, depth + 1, false)

}

function bottomLeftNodeVal(root) {
    // Fill in this method

    getLeftValue(root, 0);
    return result
}

module.exports = {Node, bottomLeftNodeVal}
