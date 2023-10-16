function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  const backtracking = (
    curIdx: number,
    remTarget: number,
    curCandidates: number[]
  ): void => {
    if (remTarget < 0 || curCandidates.length > k) return;

    if (remTarget === 0 && curCandidates.length === k) {
      result.push([...curCandidates]);
      return;
    }

    for (let candidate = curIdx; candidate < 10; candidate++) {
      if (candidate > n || candidate > 9) return;
      curCandidates.push(candidate);
      backtracking(candidate + 1, remTarget - candidate, curCandidates);
      curCandidates.pop();
    }
  };

  backtracking(1, n, []);
  return result;
}

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
