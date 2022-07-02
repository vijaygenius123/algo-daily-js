function helper(root, res) {
    if (root) {
        if (root.left) {
            helper(root.left, res);
        }
        res.push(root.val);
        if (root.right) {
            helper(root.right, res);
        }
    }
}

function inorderTraversal(root) {
    let res = [];
    helper(root, res)
    return res;
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

module.exports = {
    Node,
    inorderTraversal
}
