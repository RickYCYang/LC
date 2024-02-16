// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let oddHead = new ListNode();
  let oddTail = oddHead;
  let evenHead = new ListNode();
  let evenTail = evenHead;
  let node: ListNode | null = head;
  let count = 0;
  while (node) {
    if (++count % 2) {
      oddTail.next = new ListNode(node.val);
      oddTail = oddTail.next;
    } else {
      evenTail.next = new ListNode(node.val);
      evenTail = evenTail.next;
    }
    node = node.next;
  }
  /** only 1 node, return oddHead.next directly since oddHead is a dummy node */
  if (count === 1) return oddHead.next;

  /** multiple nodes, needs to concatenate odd nodes and even nodes  */
  oddTail.next = evenHead.next;
  return oddHead.next;
}
