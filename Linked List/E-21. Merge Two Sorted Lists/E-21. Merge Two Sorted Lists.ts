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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  const head = new ListNode();
  let node = head;

  /** travel all nodes */
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1;
      [node, list1] = [node.next, list1.next];
    } else {
      node.next = list2;
      [node, list2] = [node.next, list2.next];
    }
  }
  node.next = list1 || list2;
  return head.next;
}
