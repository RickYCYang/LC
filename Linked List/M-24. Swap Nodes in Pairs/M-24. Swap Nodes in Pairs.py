# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        dummy = ListNode(next=head)
        self.recursive(dummy)
        return dummy.next

    def recursive(self, node: Optional[ListNode]):
        if not node or not node.next or not node.next.next:
            return

        next_node = node.next
        next_of_next_node = node.next.next

        node.next = next_of_next_node
        next_node.next = next_of_next_node.next
        next_of_next_node.next = next_node
        self.recursive(next_node)
