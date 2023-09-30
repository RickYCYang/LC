/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const mod = 1000000007;
  const paths = new Array(m * n)
    .fill(null)
    .map((_) => new Array(maxMove + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0) add(i, j);
      if (i == m - 1) add(i, j);
      if (j == 0) add(i, j);
      if (j == n - 1) add(i, j);
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let step = 1; step <= maxMove; step++) {
    // 枚举所有的「位置」
    for (let k = 0; k < m * n; k++) {
      const [x, y] = parseIdx(k);
      for (const dir of dirs) {
        const nx = x + dir[0];
        const ny = y + dir[1];
        // 如果位置有「相邻格子」，则「相邻格子」参与状态转移
        if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
          paths[k][step] += paths[getIndex(nx, ny)][step - 1];
          paths[k][step] %= mod;
        }
      }
    }
  }

  // 最终结果为从起始点触发，最大移动步数不超 N 的路径数量
  return paths[getIndex(startRow, startColumn)][maxMove];

  function add(x, y) {
    idx = getIndex(x, y);
    for (let step = 1; step <= maxMove; step++) {
      paths[idx][step]++;
    }
  }

  function getIndex(x, y) {
    return x * n + y;
  }

  function parseIdx(idx) {
    return [Math.floor(idx / n), idx % n];
  }
};

const testData = [
  {
    m: 2,
    n: 2,
    maxMove: 2,
    startRow: 0,
    startColumn: 0,
    ans: 6,
  },
  {
    m: 1,
    n: 3,
    maxMove: 3,
    startRow: 0,
    startColumn: 1,
    ans: 12,
  },
];

for (const data of testData) {
  console.log(
    data.ans ===
      findPaths(data.m, data.n, data.maxMove, data.startRow, data.startColumn)
  );
}
