# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(node: Optional[TreeNode], accu_zigzag_len: int, direction: str):
            if node is None:
                return accu_zigzag_len - 1

            left_accu_zigzag_len, right_accu_zigzag_len = 1, 1
            if direction == "left":
                right_accu_zigzag_len = accu_zigzag_len + 1
            elif direction == "right":
                left_accu_zigzag_len = accu_zigzag_len + 1

            left_zigzag_len = dfs(node.left, left_accu_zigzag_len, "left")
            right_zigzag_len = dfs(node.right, right_accu_zigzag_len, "right")
            zigzag_len = max(left_zigzag_len, right_zigzag_len)

            return zigzag_len

        return dfs(root, 0, "")
