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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const nums = [];

    const recursion = (node) => {
        if (node.left) {
            recursion(node.left);
        }

        nums.push(node.val);

        if (node.right) {
            recursion(node.right);
        }
    };

    recursion(root);

    const FIRST_INDEX = 0;
    const LAST_INDEX = nums.length - 1;

    let formerIndex = FIRST_INDEX;
    let latterIndex = LAST_INDEX;

    while (formerIndex < latterIndex) {
        const sum = nums[formerIndex] + nums[latterIndex];

        if (sum < k) {
            formerIndex += 1;
        }
        else if (sum > k) {
            latterIndex -= 1;
        }
        else {
            return true;
        }
    }

    return false;
};
