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

function deleteMiddle(head: ListNode | null): ListNode | null {
  let node = head;
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  if (length === 1) return null;

  const middle = length >> 1;
  node = head;
  let count = 1;
  while (count < middle) {
    count++;
    node = node.next;
  }
  node.next = node.next?.next || null;
  return head;
}
