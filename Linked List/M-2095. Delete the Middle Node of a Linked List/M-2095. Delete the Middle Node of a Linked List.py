# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        node_length = 0
        while node:
            node_length += 1
            node = node.next

        if node_length == 1:
            return None

        middle = node_length // 2
        node = head
        count = 1
        while count < middle:
            node = node.next
            count += 1

        node.next = node.next.next if node.next is not None else None
        return head
