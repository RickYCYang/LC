/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//      1
//  2       3
//    4   8   6
//  2   5

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const values: number[] = [];
  const bfs = (nodes: TreeNode[]): void => {
    if (!nodes.length) return;

    /** push the rightest node value */
    values.push(nodes[nodes.length - 1].val);

    /** prepare the nodes of next level  */
    const nextNodes: TreeNode[] = [];
    while (nodes.length) {
      const node = nodes.shift();
      if (node?.left) nextNodes.push(node.left);
      if (node?.right) nextNodes.push(node.right);
    }

    /** travelsal to next level */
    bfs(nextNodes);
  };

  bfs([root]);
  return values;
}
