# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(node: TreeNode, leaf_vals: list[int]):
            if node.left is None and node.right is None:
                leaf_vals.append(node.val)
                return

            if node.left:
                dfs(node.left, leaf_vals)
            if node.right:
                dfs(node.right, leaf_vals)

        root1_leaf_vals, root2_leaf_vals = [], []
        dfs(root1, root1_leaf_vals)
        dfs(root2, root2_leaf_vals)

        return (
            len(root1_leaf_vals) == len(root2_leaf_vals)
            and root1_leaf_vals == root2_leaf_vals
        )
