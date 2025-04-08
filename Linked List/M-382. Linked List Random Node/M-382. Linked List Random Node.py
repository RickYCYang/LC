import random


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def __init__(self, head: Optional[ListNode]):
        self.node_vals = []
        while head:
            self.node_vals.append(head.val)
            head = head.next

    def getRandom(self) -> int:
        return self.node_vals[random.randint(0, len(self.node_vals) - 1)]


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
