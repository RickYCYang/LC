/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  return traversal(root);
};

const traversal = (node) => {
  if (!node) return 0;

  let max = 0;
  for (const child of node.children) max = Math.max(max, traversal(child));

  return max + 1;
};
