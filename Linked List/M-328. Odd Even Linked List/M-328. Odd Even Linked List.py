# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        odd_head, even_head = ListNode(), ListNode()
        odd_tail, even_tail = odd_head, even_head
        node = head
        count = 0

        while node:
            count += 1
            if count % 2:
                odd_tail.next = ListNode(node.val)
                odd_tail = odd_tail.next
            else:
                even_tail.next = ListNode(node.val)
                even_tail = even_tail.next
            node = node.next

        if count == 1:
            return odd_head.next

        odd_tail.next = even_head.next
        return odd_head.next
