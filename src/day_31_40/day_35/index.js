

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function getDepthValues(node, depth, result){
    if(node === null) return false;
    else  {
        if(result[depth]=== undefined){
            result[depth] = [node.val];
        } else {
            result[depth] = [...result[depth], node.val];
        }
    }

     getDepthValues(node.left, depth + 1, result);
     getDepthValues(node.right, depth + 1, result);
}

function meanOfLevels(head) {
    let result = {};
    getDepthValues(head, 0, result);
    return Object.entries(result).map(val => val[1].reduce((prev, curr) => prev + curr)/val[1].length);
}

module.exports = {Node, meanOfLevels}
