# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        node_map = {}
        ttl_nodes = 0
        node = head

        while node:
            ttl_nodes += 1
            node_map[ttl_nodes] = node
            node = node.next

        prev_target_node_idx = ttl_nodes - n
        prev_target_node = node_map.get(prev_target_node_idx)
        if prev_target_node:
            prev_target_node.next = prev_target_node.next.next
            return head
        else:
            return head.next
