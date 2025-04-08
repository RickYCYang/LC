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

function pairSum(head: ListNode | null): number {
  let maxSum = 0;
  const nodeVals: number[] = [];
  while (head) {
    nodeVals.push(head.val);
    head = head.next;
  }
  const n = nodeVals.length;
  for (let i = 0; i < n / 2; i++) {
    maxSum = Math.max(nodeVals[i] + nodeVals[n - 1 - i], maxSum);
  }
  return maxSum;
}
