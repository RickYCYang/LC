/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const destination = graph.length - 1;
  const result = [];
  const nodeMap = graph.reduce((map, dests, i) => {
    map[i] = dests;
    return map;
  }, {});

  const bfs = (current, curPath) => {
    if (current === destination) return result.push(curPath);

    for (const next of nodeMap[current]) {
      const path = [...curPath];
      path.push(next);
      bfs(next, path);
    }
  };

  bfs(0, [0]);

  return result;
};

const testCases = [
  {
    graph: [[1, 2], [3], [3], []],
    expected: [
      [0, 1, 3],
      [0, 2, 3],
    ],
  },
  {
    graph: [[4, 3, 1], [3, 2, 4], [3], [4], []],
    expected: [
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ],
  },
];

for (const testCase of testCases) {
  console.log(
    JSON.stringify(allPathsSourceTarget(testCase.graph)) ===
      JSON.stringify(testCase.expected)
  );
}
