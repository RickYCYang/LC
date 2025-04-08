function combinationSum3(k: number, n: number): number[][] {
  if (k > n) return [];

  const combinations: number[][] = [];
  backtrack(k, n, combinations, 1, []);
  return combinations;
}

const backtrack = (
  k: number,
  remTarget: number,
  combinations: number[][],
  curIdx: number,
  candidates: number[]
): void => {
  if (candidates.length > k) return;
  if (candidates.length === k && remTarget === 0) {
    combinations.push([...candidates]);
    return;
  }

  for (let candidate = curIdx; candidate < 10; candidate++) {
    const updatedRemTarget = remTarget - candidate;
    if (updatedRemTarget < 0) break;
    candidates.push(candidate);
    backtrack(k, updatedRemTarget, combinations, candidate + 1, candidates);
    candidates.pop();
  }
};

const testData = [
  {
    k: 3,
    n: 7,
    ans: [[1, 2, 4]],
  },
  {
    k: 3,
    n: 9,
    ans: [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ],
  },
  {
    k: 4,
    n: 1,
    ans: [],
  },
  {
    k: 2,
    n: 18,
    ans: [],
  },
  {
    k: 9,
    n: 45,
    ans: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) === JSON.stringify(combinationSum3(data.k, data.n))
  );
}
