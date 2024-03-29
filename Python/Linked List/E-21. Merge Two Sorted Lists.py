# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        if not list2:
            return list1

        head = ListNode()
        node = head

        while (list1 and list2):
            if list1.val <= list2.val:
                node.next = list1
                node, list1 = node.next, list1.next
            else:
                node.next = list2
                node, list2 = node.next, list2.next

        node.next = list1 or list2

        return head.next
