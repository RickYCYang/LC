/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let oddHead = new ListNode();
  let oddNode = oddHead;
  let evenHead = new ListNode();
  let evenNode = evenHead;
  let i = 1;
  while (head) {
    if (i % 2 === 1) {
      oddNode.next = head;
      oddNode = oddNode.next;
    } else {
      evenNode.next = head;
      evenNode = evenNode.next;
    }
    head = head.next;
    i++;
  }
  evenNode.next = null;
  oddNode.next = evenHead.next;
  return oddHead.next;
};
