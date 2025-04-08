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
var minDiffInBST = function (root) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prevValue = null;

  const inorderTraversal = (node) => {
    if (!node) return;

    // go left first
    inorderTraversal(node.left);

    // update minDiff and prevValue
    if (prevValue !== null) minDiff = Math.min(node.val - prevValue, minDiff);
    prevValue = node.val;

    // go right
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return minDiff;
};
