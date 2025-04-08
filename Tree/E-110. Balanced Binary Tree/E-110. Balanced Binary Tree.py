# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        lh = self.calc_height(root.left)
        rh = self.calc_height(root.right)

        return (
            abs(lh - rh) < 2
            and self.isBalanced(root.left)
            and self.isBalanced(root.right)
        )

    def calc_height(self, node):
        if not node:
            return 0
        return max(self.calc_height(node.left), self.calc_height(node.right)) + 1
