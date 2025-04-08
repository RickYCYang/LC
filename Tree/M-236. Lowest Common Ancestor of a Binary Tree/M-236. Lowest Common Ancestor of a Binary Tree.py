# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    @classmethod
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        if root is None or root == p or root == q:
            return root
        node_from_left = Solution.lowestCommonAncestor(root.left, p, q)
        node_from_right = Solution.lowestCommonAncestor(root.right, p, q)

        if node_from_left and node_from_right:
            return root

        return node_from_left or node_from_right
