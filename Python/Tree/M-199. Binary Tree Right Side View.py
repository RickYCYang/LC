# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        values: List[int] = []

        def bfs(nodes: List[TreeNode]) -> None:
            if len(nodes) == 0:
                return

            nonlocal values
            values.append(nodes[len(nodes) - 1].val)

            next_nodes: List[TreeNode] = []
            while len(nodes):
                node = nodes.pop(0)
                if node.left:
                    next_nodes.append(node.left)
                if node.right:
                    next_nodes.append(node.right)
            bfs(next_nodes)

        bfs([root])
        return values
