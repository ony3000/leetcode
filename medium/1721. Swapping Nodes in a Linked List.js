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
var swapNodes = function(head, k) {
    let size = 0;

    let prevTarget = null;
    let currentTarget = head;

    while (currentTarget) {
        size += 1;
        currentTarget.prev = prevTarget;
        prevTarget = currentTarget;
        currentTarget = currentTarget.next;
    }

    const tail = prevTarget;

    if (size % 2 === 1 && (size + 1) / 2 === k) {
        return head;
    }

    if (k > size / 2) {
        k = size + 1 - k;
    }

    let targetFromHead = head;
    let targetFromTail = tail;

    for (let num = 1; num < k; num += 1) {
        targetFromHead = targetFromHead.next;
        targetFromTail = targetFromTail.prev;
    }

    if (k > 1) {
        targetFromHead.prev.next = targetFromTail;
        targetFromTail.next.prev = targetFromHead;
    }

    if (targetFromHead.next === targetFromTail) {
        targetFromHead.next = targetFromTail.next;
        targetFromTail.next = targetFromHead;

        targetFromTail.prev = targetFromHead.prev;
        targetFromHead.prev = targetFromTail;
    }
    else {
        targetFromHead.next.prev = targetFromTail;
        targetFromTail.prev.next = targetFromHead;

        [targetFromHead.next, targetFromTail.next] = [targetFromTail.next, targetFromHead.next];
        [targetFromHead.prev, targetFromTail.prev] = [targetFromTail.prev, targetFromHead.prev];
    }

    return (k === 1 ? tail : head);
};
