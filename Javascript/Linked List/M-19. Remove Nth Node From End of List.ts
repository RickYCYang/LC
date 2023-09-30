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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const nodeMap = new Map<number, ListNode>();
  let node = head;
  let i = 0;
  while (node) {
    i++;
    nodeMap.set(i, node);
    node = node.next;
  }
  const prevTargetNodeIndex = i - n; // 2, 2
  const prevTargetNode = nodeMap.get(prevTargetNodeIndex);
  if (prevTargetNode) {
    if (prevTargetNode.next) prevTargetNode.next = prevTargetNode.next.next;
    else prevTargetNode.next = null;
    return head;
  } else {
    return head?.next || null;
  }
}
