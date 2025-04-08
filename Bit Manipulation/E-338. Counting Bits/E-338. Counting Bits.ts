function countBits(n: number): number[] {
  const result = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
}

const testData = [
  { n: 2, ans: [0, 1, 1] },
  { n: 5, ans: [0, 1, 1, 2, 1, 2] },
];

for (const data of testData) {
  console.log(JSON.stringify(data.ans) === JSON.stringify(countBits(data.n)));
}
