type QueueItem = {
  dividend: string;
  product: number;
};

let calcEquation = (equations, values, queries) => {
  const divMap: Map<string, Map<string, number>> = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [dividend, divisor] = equations[i];
    if (!divMap.has(dividend)) divMap.set(dividend, new Map<string, number>());
    if (!divMap.has(divisor)) divMap.set(divisor, new Map<string, number>());
    divMap.get(dividend)?.set(divisor, values[i]);
    divMap.get(divisor)?.set(dividend, 1 / values[i]);
  }

  const bfs = (dividend: string, divisor: string): number => {
    if (!divMap.has(dividend) || !divMap.has(divisor)) return -1;

    const visited: Set<string> = new Set([dividend]);
    const queue: QueueItem[] = [{ dividend, product: 1 }];
    while (queue.length) {
      const { dividend, product } = queue.shift() as QueueItem;
      if (dividend === divisor) return product;
      const curDivisors = divMap.get(dividend) || [];
      for (const [curDivisor, weight] of curDivisors) {
        if (visited.has(curDivisor)) continue;
        visited.add(curDivisor);
        queue.push({ dividend: curDivisor, product: product * weight });
      }
    }
    return -1;
  };

  const result: number[] = [];
  for (const [dividend, divisor] of queries) {
    result.push(bfs(dividend, divisor));
  }
  return result;
};

const testData = [
  {
    equations: [
      ['a', 'b'],
      ['b', 'c'],
    ],
    values: [2.0, 3.0], // a = 2b, a = 6c, b = 1/2a, b = 3c, c = 1/6a, c = 1/3b
    queries: [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ],
    ans: [6.0, 0.5, -1.0, 1.0, -1.0],
  },
  {
    equations: [
      ['a', 'b'],
      ['b', 'c'],
      ['bc', 'cd'],
    ],
    values: [1.5, 2.5, 5.0],
    queries: [
      ['a', 'c'],
      ['c', 'b'],
      ['bc', 'cd'],
      ['cd', 'bc'],
    ],
    ans: [3.75, 0.4, 5.0, 0.2],
  },
  {
    equations: [['a', 'b']],
    values: [0.5],
    queries: [
      ['a', 'b'],
      ['b', 'a'],
      ['a', 'c'],
      ['x', 'y'],
    ],
    ans: [0.5, 2.0, -1.0, -1.0],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(
        calcEquation(data['equations'], data['values'], data['queries'])
      )
  );
}
