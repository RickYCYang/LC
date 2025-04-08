function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);
  const backtracking = (
    curIdx: number,
    remTarget: number,
    curCandidates: number[]
  ): void => {
    if (remTarget === 0) {
      result.push([...curCandidates]);
      return;
    }

    if (remTarget < 0) return;

    for (let i = curIdx; i < candidates.length; i++) {
      const candidate = candidates[i];
      /** to prevent we starting from a same root */
      if (i > 0 && candidate === candidates[i - 1]) continue;

      curCandidates.push(candidate);
      candidates.splice(i, 1);
      backtracking(i, remTarget - candidate, curCandidates);
      candidates.splice(i, 0, candidate);
      curCandidates.pop();
    }
  };

  backtracking(0, target, []);
  return result;
}

const testData = [
  {
    candidates: [10, 1, 2, 7, 6, 1, 5],
    target: 8,
    ans: [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ],
  },
  {
    candidates: [2, 5, 2, 1, 2],
    target: 5,
    ans: [[1, 2, 2], [5]],
  },
  {
    candidates: [2],
    target: 1,
    ans: [],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(combinationSum2(data.candidates, data.target))
  );
}
