import sys


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        max_lvl_sum = -sys.maxsize
        max_sum_lvl = -1

        def bfs(lvl, nodes: List[TreeNode]):
            if len(nodes) == 0:
                return

            nonlocal max_lvl_sum
            nonlocal max_sum_lvl
            lvl_sum = 0
            next_nodes: List[TreeNode] = []
            while len(nodes):
                node = nodes.pop()
                lvl_sum += node.val
                if node.left:
                    next_nodes.append(node.left)
                if node.right:
                    next_nodes.append(node.right)

            if lvl_sum > max_lvl_sum:
                max_lvl_sum = lvl_sum
                max_sum_lvl = lvl

            bfs(lvl + 1, next_nodes)

        bfs(1, [root])
        return max_sum_lvl
