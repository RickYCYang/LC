/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// original: 1 -> 2 -> 3 -> 4
// expected: 2 -> 1 -> 4 -> 3
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const dummy = new ListNode(-1, head);
  recursive(dummy);
  return dummy.next;
}

const recursive = (node: ListNode | null) => {
  if (!node?.next || !node?.next?.next) return;

  const origNext = node.next;
  const origNextOfNext = node.next.next;
  node.next = origNextOfNext;
  origNext.next = origNextOfNext.next;
  origNextOfNext.next = origNext;
  recursive(origNext);
};
