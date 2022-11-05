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
var averageOfLevels = function(root) {
    const accumulationPerLevel = [];

    const recursiveClosure = (depth, node) => {
        accumulationPerLevel[depth] = accumulationPerLevel[depth] || { sum: 0, count: 0 };
        accumulationPerLevel[depth].sum += node.val;
        accumulationPerLevel[depth].count += 1;

        if (node.left) {
            recursiveClosure(depth + 1, node.left);
        }

        if (node.right) {
            recursiveClosure(depth + 1, node.right);
        }
    };

    recursiveClosure(0, root);

    return accumulationPerLevel.map(obj => obj.sum / obj.count);
};
