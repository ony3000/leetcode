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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    if (root.val !== voyage[0]) {
        return [-1];
    }
    else if (voyage.length === 1) {
        return [];
    }

    const FIRST_INDEX = 0;
    const LAST_INDEX = voyage.length - 1;

    const flips = [];
    let index = FIRST_INDEX;

    const recursion = (node) => {
        if (index === LAST_INDEX - 1) {
            return;
        }

        const nextIndex = index + 1;

        if (node.left !== null && node.right !== null) {
            if (node.left.val !== voyage[nextIndex] && node.right.val !== voyage[nextIndex]) {
                return false;
            }

            if (node.right.val === voyage[nextIndex]) {
                flips.push(node.val);

                index += 1;
                if (recursion(node.right) === false) {
                    return false;
                }

                const dynamicNextIndex = index + 1;
                if (node.left.val !== voyage[dynamicNextIndex]) {
                    return false;
                }

                index += 1;
                return recursion(node.left);
            }
            else {
                index += 1;
                if (recursion(node.left) === false) {
                    return false;
                }

                const dynamicNextIndex = index + 1;
                if (node.right.val !== voyage[dynamicNextIndex]) {
                    return false;
                }

                index += 1;
                return recursion(node.right);
            }
        }
        else if (node.left !== null) {
            if (node.left.val !== voyage[nextIndex]) {
                return false;
            }

            index += 1;
            return recursion(node.left);
        }
        else if (node.right !== null) {
            if (node.right.val !== voyage[nextIndex]) {
                return false;
            }

            index += 1;
            return recursion(node.right);
        }
    };

    if (recursion(root) === false) {
        return [-1];
    }

    return flips;
};
