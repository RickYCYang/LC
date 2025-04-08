import sys


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        node_queue = [root]
        is_odd_lvl = True

        while len(node_queue):
            cur_lvl_node_cnt = len(node_queue)
            prev_node_val = 0 if is_odd_lvl else sys.maxsize

            while cur_lvl_node_cnt:
                node = node_queue.pop(0)
                val = node.val

                if is_odd_lvl and (val % 2 == 0 or val <= prev_node_val):
                    return False

                if not is_odd_lvl and (val % 2 != 0 or val >= prev_node_val):
                    return False

                prev_node_val = val
                if node.left:
                    node_queue.append(node.left)
                if node.right:
                    node_queue.append(node.right)
                cur_lvl_node_cnt -= 1

            is_odd_lvl = not is_odd_lvl

        return True
