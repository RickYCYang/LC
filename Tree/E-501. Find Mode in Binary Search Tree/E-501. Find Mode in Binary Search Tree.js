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
 * @return {number[]}
 */
var findMode = function (root) {
  let modes = [];
  let curValue = null;
  let [curCount, maxCount] = [0, Number.MIN_SAFE_INTEGER];

  const inorderTraversal = (node) => {
    if (!node) return;

    // go left first
    inorderTraversal(node.left);

    // update modes, curValue, curCount, and maxCount
    curCount = curValue === node.val ? curCount + 1 : 1;
    if (curCount > maxCount) {
      maxCount = curCount;
      modes = [node.val];
    } else if (curCount === maxCount) modes.push(node.val);

    curValue = node.val;

    // go right afterward
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return modes;
};
