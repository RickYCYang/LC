function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited: boolean[] = new Array(n).fill(false);
  let provinces = 0;

  const dfs = (city: number) => {
    visited[city] = true;
    for (let i = 0; i < n; i++) {
      if (isConnected[city][i] && i !== city && !visited[i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    provinces++;
    dfs(i);
  }

  return provinces;
}

const testData = [
  {
    isConnected: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
    ans: 2,
  },
  {
    isConnected: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    ans: 3,
  },
  {
    isConnected: [
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 0, 1, 1],
    ],
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data['ans'] === findCircleNum(data['isConnected']));
}
