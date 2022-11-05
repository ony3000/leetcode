/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    else if (lists.length === 1) {
        return lists[0];
    }

    //---- Bring it as it is from [21. Merge Two Sorted Lists]. ----//
    const mergeTwoLists = function(l1, l2) {
        if (l1 === null && l2 === null) {
            return null;
        }

        const ListNode = l1 ? l1.constructor : l2.constructor;

        const mergedListHead = new ListNode();
        let pointer = mergedListHead;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                pointer.next = new ListNode(l1.val);
                l1 = l1.next;
            }
            else {
                pointer.next = new ListNode(l2.val);
                l2 = l2.next;
            }

            pointer = pointer.next;
        }

        if (l1) {
            pointer.next = l1;
        }
        else if (l2) {
            pointer.next = l2;
        }

        return mergedListHead.next;
    };
    //---- Bring it as it is from [21. Merge Two Sorted Lists]. ----//

    return lists.reduce((accumulator, currentValue) => mergeTwoLists(accumulator, currentValue), null);
};
