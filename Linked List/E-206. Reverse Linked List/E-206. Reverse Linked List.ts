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
// head
// 1 -> 2 -> 3 -> 4
// null <- 1
function reverseList(head: ListNode | null): ListNode | null {
  let reversedHead: ListNode | null = null;
  while (head) {
    const node = new ListNode(head.val, reversedHead);
    reversedHead = node;
    head = head.next;
  }
  return reversedHead;
}
