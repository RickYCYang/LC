/** Definition for a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const nodeFromL = lowestCommonAncestor(root.left, p, q);
  const nodeFromR = lowestCommonAncestor(root.right, p, q);
  return nodeFromL && nodeFromR ? root : nodeFromL || nodeFromR;
}

/** case 1 */
const case1Lvl4Nodes = [new TreeNode(7), new TreeNode(4)];
const case1Lvl3Nodes = [
  new TreeNode(6),
  new TreeNode(2, case1Lvl4Nodes[0], case1Lvl4Nodes[1]),
  new TreeNode(0),
  new TreeNode(8),
];
const case1Lvl2Nodes = [
  new TreeNode(5, case1Lvl3Nodes[0], case1Lvl3Nodes[1]),
  new TreeNode(1, case1Lvl3Nodes[2], case1Lvl3Nodes[3]),
];
const case1RootNode = new TreeNode(3, case1Lvl2Nodes[0], case1Lvl2Nodes[1]);

console.log(
  lowestCommonAncestor(case1RootNode, case1Lvl2Nodes[0], case1Lvl4Nodes[1]).val
); // should be 5
