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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;

  const newHead = new ListNode(null, head);
  let node = newHead;
  while (node && node.next) {
    if (node.next.val === val) node.next = node.next.next;
    else node = node.next;
  }
  return newHead.next;
}
