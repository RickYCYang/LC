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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }

  const currentVal = root.val >= low && root.val <= high ? root.val : 0;

  const leftSum = rangeSumBST(root.left, low, high);
  const rightSum = rangeSumBST(root.right, low, high);

  return currentVal + leftSum + rightSum;
};

// var rangeSumBST = function(root, low, high) {
//   let sum = 0;

//   const traversal = (node) => {
//       if (!node) return;

//       if (node.val >= low && node.val <= high) sum += node.val;
//       if (node.val <= high) traversal(node.right);
//       if (node.val >= low) traversal(node.left);
//   }
//   traversal(root);
//   return sum;
// };
