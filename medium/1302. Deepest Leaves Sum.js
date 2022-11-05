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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const sumOfDepth = [];

    const recursion = (node, depth) => {
        sumOfDepth[depth] = sumOfDepth[depth] || 0;
        sumOfDepth[depth] += node.val;

        if (node.left) {
            recursion(node.left, depth + 1);
        }

        if (node.right) {
            recursion(node.right, depth + 1);
        }
    };

    recursion(root, 0);

    return sumOfDepth.slice(-1)[0];
};
