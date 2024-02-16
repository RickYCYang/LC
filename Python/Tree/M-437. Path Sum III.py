from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    @classmethod
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        path = 0

        def dfs(node: Optional[TreeNode], node_vals: list[int]):
            nonlocal path

            if node is None:
                return

            cur_node_vals = node_vals.copy()
            cur_node_vals.append(node.val)
            cur_path_sum = sum(cur_node_vals)
            if cur_path_sum == targetSum:
                path += 1
            if len(cur_node_vals) > 1:
                cur_path_sum_copy = cur_path_sum
                for i in range(0, len(cur_node_vals) - 1):
                    cur_path_sum_copy -= cur_node_vals[i]
                    if cur_path_sum_copy == targetSum:
                        path += 1
            dfs(node.left, cur_node_vals)
            dfs(node.right, cur_node_vals)

        dfs(root, [])
        return path
