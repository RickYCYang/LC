/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const dfs = (node: TreeNode | null, key: number) => {
    if (!node) return null;
    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let cur = node.right;
      while (cur.left) cur = cur.left;
      cur.left = node.left;
      return node.right;
    }
    if (key < node.val) node.left = dfs(node.left, key);
    else node.right = dfs(node.right, key);
    return node;
  };
  return dfs(root, key);
}
