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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let accuSum = 0;

  const postorderTraversal = (node) => {
    if (!node) return;

    // go right first
    postorderTraversal(node.right);

    // update curSum and node's value
    node.val += accuSum;
    accuSum = node.val;

    postorderTraversal(node.left);
  };

  postorderTraversal(root);
  return root;
};
