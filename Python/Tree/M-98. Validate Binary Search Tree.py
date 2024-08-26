# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        node_vals = []
        self.inorder_traversal(root, node_vals)
        for i in range(len(node_vals) - 1):
            if node_vals[i] >= node_vals[i + 1]:
                return False
        return True

    def inorder_traversal(self, node, node_vals):
        if node is None:
            return

        self.inorder_traversal(node.left, node_vals)
        node_vals.append(node.val)
        self.inorder_traversal(node.right, node_vals)
