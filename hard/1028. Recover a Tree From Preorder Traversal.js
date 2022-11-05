/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    const recursion = (str, parentNode, childDepth) => {
        if (str === '') {
            return;
        }

        const pattern = new RegExp(`([0-9]+)-{${childDepth}}[0-9]+`);
        const matches = str.match(pattern);

        const childPattern = new RegExp(`^-{${childDepth}}([0-9]+)`);

        if (matches === null) {
            const [ , leftChildValue ] = str.match(childPattern);
            parentNode.left = new TreeNode(Number(leftChildValue));
            recursion(str.slice(childDepth + leftChildValue.length), parentNode.left, childDepth + 1);
        }
        else {
            const [ , leftChildTail ] = matches;
            const index = matches.index;

            const leftChildStr = str.slice(0, index + leftChildTail.length);
            const rightChildStr = str.slice(index + leftChildTail.length);

            const [ , leftChildValue ] = leftChildStr.match(childPattern);
            parentNode.left = new TreeNode(Number(leftChildValue));
            recursion(leftChildStr.slice(childDepth + leftChildValue.length), parentNode.left, childDepth + 1);

            const [ , rightChildValue ] = rightChildStr.match(childPattern);
            parentNode.right = new TreeNode(Number(rightChildValue));
            recursion(rightChildStr.slice(childDepth + rightChildValue.length), parentNode.right, childDepth + 1);
        }
    };

    const [ , rootValue ] = S.match(/^([0-9]+)/);
    let root = new TreeNode(Number(rootValue));
    recursion(S.slice(rootValue.length), root, 1);

    return root;
};
