/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return head;
    }

    const nodes = [];

    let target = head;
    nodes.push(target);

    while (target.next) {
        target = target.next;
        nodes.push(target);
    }

    const size = nodes.length;

    if (size <= 1) {
        return head;
    }

    const rotationCount = k % size;
    const newHeadIndex = (size - rotationCount) % size;
    const newTailIndex = (size - rotationCount - 1) % size;

    const originalHead = nodes[0];
    const originalTail = nodes[size - 1];
    const newHead = nodes[newHeadIndex];
    const newTail = nodes[newTailIndex];

    originalTail.next = originalHead;
    newTail.next = null;

    return newHead;
};
