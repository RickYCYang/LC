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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validateBst(root, -Infinity, Infinity);
};

const validateBst = (node, mustGreater, mustLess) => {
  if (!node) return true;
  if (node.val <= mustGreater || node.val >= mustLess) return false;
  return (
    validateBst(node.left, mustGreater, node.val) &&
    validateBst(node.right, node.val, mustLess)
  );
};
