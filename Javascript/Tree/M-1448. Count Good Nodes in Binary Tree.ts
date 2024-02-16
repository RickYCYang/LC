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

function goodNodes(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, maxVal: number): number => {
    if (!node) return 0;

    let good = 0;
    if (node?.val >= maxVal) {
      good++;
      maxVal = node.val;
    }
    return good + dfs(node.left, maxVal) + dfs(node.right, maxVal);
  };
  return dfs(root, Number.MIN_SAFE_INTEGER);
}
