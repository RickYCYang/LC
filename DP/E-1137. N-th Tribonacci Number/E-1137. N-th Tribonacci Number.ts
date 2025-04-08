function tribonacci(n: number): number {
  const cache: Map<number, number> = new Map();
  return getTribonacci(n, cache);
}

const getTribonacci = (n: number, cache: Map<number, number>): number => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  if (cache.has(n)) return cache.get(n) as number;
  const result =
    getTribonacci(n - 3, cache) +
    getTribonacci(n - 2, cache) +
    getTribonacci(n - 1, cache);
  cache.set(n, result);
  return result;
};

const testData = [
  { n: 4, ans: 4 },
  { n: 25, ans: 1389537 },
];

for (const data of testData) {
  console.log(data['ans'] === tribonacci(data['n']));
}
