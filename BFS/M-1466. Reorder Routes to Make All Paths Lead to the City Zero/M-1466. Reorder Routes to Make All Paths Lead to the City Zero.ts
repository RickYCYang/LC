function minReorder(n: number, connections: number[][]): number {
  const adjCityMap = new Map<number, Set<number[]>>();
  for (const [fromCity, toCity] of connections) {
    if (!adjCityMap.has(fromCity)) adjCityMap.set(fromCity, new Set());
    if (!adjCityMap.has(toCity)) adjCityMap.set(toCity, new Set());
    adjCityMap.get(fromCity)?.add([toCity, 1]);
    adjCityMap.get(toCity)?.add([fromCity, 0]);
  }

  let reorder = 0;
  const queue: number[] = [0];
  const visited: Set<number> = new Set([0]);
  while (queue.length) {
    const city = queue.shift();
    if (city === undefined) continue;
    for (const [adjCity, isConnected] of adjCityMap.get(city) || []) {
      if (!visited.has(adjCity)) {
        reorder += isConnected;
        visited.add(adjCity);
        queue.push(adjCity);
      }
    }
  }
  return reorder;
}

const testData = [
  {
    n: 6,
    connections: [
      [0, 1],
      [1, 3],
      [2, 3],
      [4, 0],
      [4, 5],
    ],
    ans: 3,
  },
  {
    n: 5,
    connections: [
      [1, 0],
      [1, 2],
      [3, 2],
      [3, 4],
    ],
    ans: 2,
  },
  {
    n: 3,
    connections: [
      [1, 0],
      [2, 0],
    ],
    ans: 0,
  },
  {
    n: 3,
    connections: [
      [1, 2],
      [2, 0],
    ],
    ans: 0,
  },
  {
    n: 5,
    connections: [
      [4, 3],
      [2, 3],
      [1, 2],
      [1, 0],
    ],
    ans: 2,
  },
];

for (const data of testData) {
  console.log(data['ans'] === minReorder(data['n'], data['connections']));
}
