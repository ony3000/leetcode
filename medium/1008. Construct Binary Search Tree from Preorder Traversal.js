/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    const recursion = (node, children) => {
        if (children.length === 0) {
            return;
        }

        let leftChildren = null;
        let rightChildren = null;
        const index = children.findIndex((value) => (value > node.val));

        if (index === -1) {
            leftChildren = children.slice();
        }
        else {
            if (index > 0) {
                leftChildren = children.slice(0, index);
            }

            rightChildren = children.slice(index);
        }

        if (leftChildren) {
            const childValue = leftChildren.shift();

            node.left = new TreeNode(childValue);
            recursion(node.left, leftChildren);
        }

        if (rightChildren) {
            const childValue = rightChildren.shift();

            node.right = new TreeNode(childValue);
            recursion(node.right, rightChildren);
        }
    };

    const rootValue = preorder.shift();
    const root = new TreeNode(rootValue);

    recursion(root, preorder);

    return root;
};
