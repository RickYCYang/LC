# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        def dfs(node: Optional[TreeNode], key: int):
            if node is None:
                return None
            if node.val == key:
                if node.left is None:
                    return node.right
                if node.right is None:
                    return node.left
                cur = node.right
                while cur.left:
                    cur = cur.left
                cur.left = node.left
                return node.right
            if key < node.val:
                node.left = dfs(node.left, key)
            else:
                node.right = dfs(node.right, key)
            return node

        return dfs(root, key)
