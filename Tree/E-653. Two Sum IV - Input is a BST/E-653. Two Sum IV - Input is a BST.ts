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

function findTarget(root: TreeNode | null, k: number): boolean {
  const nodeVals = new Set<number>();
  return isKExisted(root, k, nodeVals);
}

const isKExisted = (
  node: TreeNode | null,
  k: number,
  nodeVals: Set<number>
) => {
  if (!node) return false;

  const needVal = k - node.val;
  if (nodeVals.has(needVal)) return true;

  nodeVals.add(node.val);
  return (
    isKExisted(node.left, k, nodeVals) || isKExisted(node.right, k, nodeVals)
  );
};
