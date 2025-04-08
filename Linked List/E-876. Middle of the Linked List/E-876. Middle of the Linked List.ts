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

function middleNode(head: ListNode | null): ListNode | null {
  const arr: ListNode[] = [];
  let n = 0;
  while (head) {
    arr.push(head);
    n++;
    head = head.next;
  }
  return arr[Math.floor(n / 2)];
}
