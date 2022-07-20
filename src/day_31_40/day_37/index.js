function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

function getLevelValue(node, depth, result){
    if(node === null) return;
    if(node.val > result[depth]){
        result[depth] = node.val;
    } else {
        result[depth] = node.val;
    }
    getLevelValue(node.left, depth + 1, result);
    getLevelValue(node.right, depth + 1, result);
}

function maxValPerLevel(root) {
    let result = {}
    getLevelValue(root, 0, result)
    return Object.entries(result).map(val => val[1]);
}

module.exports = {Node, maxValPerLevel}
