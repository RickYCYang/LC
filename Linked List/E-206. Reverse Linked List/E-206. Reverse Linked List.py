# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        reversed_head = None
        while head:
            node = ListNode(head.val, reversed_head)
            reversed_head = node
            head = head.next

        return reversed_head
