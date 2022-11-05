/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const ListNode = l1.constructor;

    const addTwoNumbersWithCarry = (l1, l2, carried = 0) => {
        const result = new ListNode();
        const sum = (l1?.val || 0) + (l2?.val || 0) + carried;
        const carry = Math.floor(sum / 10);

        result.val = sum % 10;

        if (l1?.next || l2?.next) {
            result.next = addTwoNumbersWithCarry(l1?.next, l2?.next, carry);
        }
        else if (carry) {
            result.next = new ListNode(carry);
        }

        return result;
    };

    const result = addTwoNumbersWithCarry(l1, l2);

    return result;
};
