/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head === null) {
        return null;
    }

    const Node = head.constructor;

    const flattenNodeValues = [];
    let target = head;

    do {
        flattenNodeValues.push(target.val);

        if (target.child) {
            const flattenChildrenHead = flatten(target.child);
            let childTarget = flattenChildrenHead;

            while (childTarget) {
                flattenNodeValues.push(childTarget.val);
                childTarget = childTarget.next;
            }
        }

        target = target.next;
    } while (target);

    const flattenNodes = flattenNodeValues.map((value) => new Node(value, null, null, null));

    const FIRST_INDEX = 0;
    const LAST_INDEX = flattenNodes.length - 1;

    flattenNodes.forEach((node, index) => {
        if (index > FIRST_INDEX) {
            node.prev = flattenNodes[index - 1];
        }

        if (index < LAST_INDEX) {
            node.next = flattenNodes[index + 1];
        }
    });

    return flattenNodes[0];
};
