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

function isEvenOddTree(root: TreeNode | null): boolean {
  const nodeQueue: TreeNode[] = [root];
  let isOddLevel = true;

  while (nodeQueue.length) {
    let curLvlNodeCnt = nodeQueue.length;
    let prevNodeVal = isOddLevel ? 0 : Number.MAX_SAFE_INTEGER;

    while (curLvlNodeCnt--) {
      const node = nodeQueue.shift();
      const val = node.val;

      if (isOddLevel && (val % 2 === 0 || val <= prevNodeVal)) return false;
      if (!isOddLevel && (val % 2 !== 0 || val >= prevNodeVal)) return false;

      prevNodeVal = val;
      if (node.left) nodeQueue.push(node.left);
      if (node.right) nodeQueue.push(node.right);
    }

    isOddLevel = !isOddLevel;
  }

  return true;
}
