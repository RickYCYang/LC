/**
 * Given the root of a Binary Search Tree (BST), return the minimum
 * absolute difference between the values of any two different nodes in the tree.
 *
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
var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prevNodeVal = null;

  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    if (prevNodeVal !== null) {
      minDiff = Math.min(minDiff, node.val - prevNodeVal);
    }
    prevNodeVal = node.val;
    inorder(node.right);
  };
  inorder(root);
  return minDiff;
};
