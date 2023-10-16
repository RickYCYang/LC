function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const backtracking = (
    curIdx: number,
    remTarget: number,
    curCandidates: number[]
  ) => {
    if (remTarget === 0) {
      result.push([...curCandidates]);
      return;
    }

    if (remTarget < 0) return;

    for (let i = curIdx; i < candidates.length; i++) {
      curCandidates.push(candidates[i]);
      backtracking(i, remTarget - candidates[i], curCandidates);
      curCandidates.pop();
    }
  };
  backtracking(0, target, []);

  return result;
}
const testData = [
  {
    candidates: [2, 3, 6, 7],
    target: 7,
    ans: [[2, 2, 3], [7]],
  },
  {
    candidates: [2, 3, 5],
    target: 8,
    ans: [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
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
      JSON.stringify(combinationSum(data.candidates, data.target))
  );
}
