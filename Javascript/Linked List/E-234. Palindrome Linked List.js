/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let [forward, backward] = ['', ''];
  while (head) {
    forward += head.val;
    backward = head.val + backward;
    head = head.next;
  }
  return forward === backward;
};
