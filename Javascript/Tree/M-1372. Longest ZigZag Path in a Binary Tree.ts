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

function longestZigZag(root: TreeNode | null): number {
  const dfs = (
    node: TreeNode | null,
    accuZigZagLength: number,
    direction: string
  ): number => {
    if (!node) return accuZigZagLength - 1;

    let [lAccuZigZagLength, rAccuZigZagLength] = [1, 1];
    if (direction === 'left') rAccuZigZagLength = accuZigZagLength + 1;
    else if (direction === 'right') lAccuZigZagLength = accuZigZagLength + 1;

    const lZigZagLength = dfs(node.left, lAccuZigZagLength, 'left');
    const rZigZagLength = dfs(node.right, rAccuZigZagLength, 'right');
    const zigZagLength = Math.max(lZigZagLength, rZigZagLength);

    return zigZagLength;
  };
  return dfs(root, 0, '');
}

/** case 1 */
const case1Lvl5Nodes = [new TreeNode(1)];
const case1Lvl4Nodes = [
  new TreeNode(1, null, case1Lvl5Nodes[0]),
  new TreeNode(1),
];
const case1Lvl3Nodes = [new TreeNode(1, case1Lvl4Nodes[0], case1Lvl4Nodes[1])];
const case1Lvl2Nodes = [
  new TreeNode(1, null, case1Lvl3Nodes[0]),
  new TreeNode(1),
];
const case1RootNode = new TreeNode(1, case1Lvl2Nodes[0], case1Lvl2Nodes[1]);

console.log(longestZigZag(case1RootNode)); // should be 4

/** case 2 */
const case2Lvl6Nodes = [new TreeNode(1)];
const case2Lvl5Nodes = [new TreeNode(1, null, case2Lvl6Nodes[0])];
const case2Lvl4Nodes = [
  new TreeNode(1, null, case2Lvl5Nodes[0]),
  new TreeNode(1),
];
const case2Lvl3Nodes = [
  new TreeNode(1),
  new TreeNode(1, case2Lvl4Nodes[0], case2Lvl4Nodes[1]),
];
const case2Lvl2Nodes = [new TreeNode(1, case2Lvl3Nodes[0], case2Lvl3Nodes[1])];
const case2RootNode = new TreeNode(1, null, case2Lvl2Nodes[0]);

console.log(longestZigZag(case2RootNode)); // should be 4
