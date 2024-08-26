/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const visited = new Set([source]);
  const nodeMap = edges.reduce((map, [from, to]) => {
    map[from] ??= [];
    map[to] ??= [];
    map[from].push(to);
    map[to].push(from);
    return map;
  }, {});
  const stack = [source];

  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;

    for (const neighbor of nodeMap[node]) {
      if (visited.has(neighbor)) continue;

      stack.push(neighbor);
      visited.add(neighbor);
    }
  }

  return false;
};

const testCases = [
  {
    n: 3,
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    source: 0,
    destination: 2,
    expected: true,
  },
  {
    n: 6,
    edges: [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    source: 0,
    destination: 5,
    expected: false,
  },
  {
    n: 10,
    edges: [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    source: 5,
    destination: 9,
    expected: true,
  },
];

for (const testCase of testCases) {
  console.log(
    testCase.expected ===
      validPath(
        testCase.n,
        testCase.edges,
        testCase.source,
        testCase.destination
      )
  );
}
