/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const nodeArray = [head];

    while (head.next) {
        head = head.next;
        nodeArray.push(head);
    }

    if (n === nodeArray.length) {
        return nodeArray[0].next;
    }

    const targetIndex = nodeArray.length - n;

    nodeArray[targetIndex - 1].next = nodeArray[targetIndex].next;

    return nodeArray[0];
};
