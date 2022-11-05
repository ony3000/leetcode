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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    const TreeNode = root.constructor;

    if (d === 1) {
        const newNode = new TreeNode(v, root, null);

        return newNode;
    }

    const recursiveClosure = (node, depth) => {
        if (depth + 1 === d) {
            const newLeftNode = new TreeNode(v, node.left, null);
            const newRightNode = new TreeNode(v, null, node.right);

            node.left = newLeftNode;
            node.right = newRightNode;
        }
        else {
            if (node.left) {
                recursiveClosure(node.left, depth + 1);
            }

            if (node.right) {
                recursiveClosure(node.right, depth + 1);
            }
        }
    };

    recursiveClosure(root, 1);

    return root;
};
