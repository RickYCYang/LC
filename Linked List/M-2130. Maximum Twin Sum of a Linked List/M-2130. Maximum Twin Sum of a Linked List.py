# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        node_vals = []
        while head:
            node_vals.append(head.val)
            head = head.next

        n = len(node_vals)
        max_pair = 0
        for i in range(n // 2):
            max_pair = max(max_pair, node_vals[i] + node_vals[n - 1 - i])

        return max_pair
