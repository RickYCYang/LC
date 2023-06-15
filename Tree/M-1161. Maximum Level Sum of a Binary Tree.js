/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const lvlSumMap = new Map();
  calcLvlSum(root, 1, lvlSumMap);
  let firstMaxSumLvl;
  let maxSum = -Infinity;
  for (const [lvl, sum] of lvlSumMap) {
    if (sum > maxSum) {
      firstMaxSumLvl = lvl;
      maxSum = sum;
    }
  }
  return firstMaxSumLvl;
};

const calcLvlSum = (node, lvl, lvlSumMap) => {
  if (!node) return;

  const currSum = (lvlSumMap.get(lvl) || 0) + node.val;
  lvlSumMap.set(lvl, currSum);

  calcLvlSum(node.left, lvl + 1, lvlSumMap);
  calcLvlSum(node.right, lvl + 1, lvlSumMap);
};
