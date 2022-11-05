/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    const result = [];

    const recursion = (node, depth) => {
        if (result[depth] === undefined || result[depth] < node.val) {
            result[depth] = node.val;
        }

        if (node.left) {
            recursion(node.left, depth + 1);
        }

        if (node.right) {
            recursion(node.right, depth + 1);
        }
    };

    if (root) {
        recursion(root, 0);
    }

    return result;
};
