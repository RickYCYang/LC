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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let path = 0;
  const dfs = (node: TreeNode | null, nodeVals: number[]): void => {
    if (!node) return;

    const curNodeVals = [...nodeVals];
    curNodeVals.push(node.val);
    const curSum = curNodeVals.reduce((sum, val) => sum + val, 0);
    if (curSum === targetSum) path++;
    if (curNodeVals.length > 1) {
      let copyCurSum = curSum;
      /** start from 1 since root is not removeable */
      for (let i = 0; i < curNodeVals.length - 1; i++) {
        copyCurSum -= curNodeVals[i];
        if (copyCurSum === targetSum) path++;
      }
    }

    dfs(node.left, curNodeVals);
    dfs(node.right, curNodeVals);
  };

  dfs(root, []);
  return path;
}
