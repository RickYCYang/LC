/* Definition for a binary tree node. */
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

/** solution 1 (leetcode solution) */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return false;
  const dfs = (node: TreeNode, leafVals: number[]) => {
    if (!node.left && !node.right) return leafVals.push(node.val);
    if (node.left) dfs(node.left, leafVals);
    if (node.right) dfs(node.right, leafVals);
  };
  const root1LeafVals = [];
  const root2LeafVals = [];
  dfs(root1, root1LeafVals);
  dfs(root2, root2LeafVals);
  return (
    root1LeafVals.length === root2LeafVals.length &&
    root1LeafVals.every((val, i) => val === root2LeafVals[i])
  );
}

/** solution 2 (figured by myself) */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const getLeafNodeVals = (node: TreeNode): number[] => {
    /** leaf node */
    if (!node.left && !node.right) return [node.val];

    /** non-leaf node */
    const leafNodeVals: number[] = [];
    /** left goes first, then right */
    if (node.left) leafNodeVals.push(...getLeafNodeVals(node.left));
    if (node.right) leafNodeVals.push(...getLeafNodeVals(node.right));
    return leafNodeVals;
  };
  if (!root1 || !root2) return false;
  const root1LeafVals = getLeafNodeVals(root1);
  const root2LeafVals = getLeafNodeVals(root2);
  return (
    root1LeafVals.length === root2LeafVals.length &&
    root1LeafVals.every((val, i) => val === root2LeafVals[i])
  );
}
