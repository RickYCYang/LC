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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;
  const setA = new Set<ListNode>();
  while (headA) {
    setA.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (setA.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
}
