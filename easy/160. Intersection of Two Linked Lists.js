/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let intersection = null;
    let target = null;

    target = headA;
    if (target) {
        target.prev = null;

        while (target) {
            let next = target.next;

            if (next) {
                next.prev = target;
            }

            target = next;
        }
    }

    target = headB;
    while (target) {
        if ('prev' in target) {
            intersection = target;
            break;
        }

        target = target.next;
    }

    return intersection;
};
