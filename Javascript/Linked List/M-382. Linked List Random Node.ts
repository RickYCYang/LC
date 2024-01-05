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

class Solution {
  nodeVals: number[];

  constructor(head: ListNode | null) {
    this.nodeVals = [];
    while (head) {
      this.nodeVals.push(head.val);
      head = head.next;
    }
  }

  getRandom(): number {
    const randomNum = Math.floor(Math.random() * this.nodeVals.length);
    return this.nodeVals[randomNum];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
