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

function maxLevelSum(root: TreeNode): number {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxSumLvl: number = -1;

  const bfs = (lvl: number, nodes: TreeNode[]) => {
    if (!nodes.length) return;

    const nextNodes: TreeNode[] = [];
    let sum = 0;
    while (nodes.length) {
      const node = nodes.pop();
      if (node?.val) sum += node.val;
      if (node?.left) nextNodes.push(node.left);
      if (node?.right) nextNodes.push(node.right);
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxSumLvl = lvl;
    }
    bfs(lvl + 1, nextNodes);
  };

  bfs(1, [root]);
  return maxSumLvl;
}
