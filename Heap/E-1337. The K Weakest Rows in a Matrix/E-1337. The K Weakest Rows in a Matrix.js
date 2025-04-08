/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  // [soldiers, row index]
  const rows = mat.map((row, idx) => [
    idx,
    row.reduce((accu, cur) => accu + cur, 0),
  ]);

  rows.sort(([aIdx, aSum], [bIdx, bSum]) => aSum - bSum || aIdx - bIdx);

  const result = [];
  for (let i = 0; i < k; i++) result.push(rows[i][0]);

  return rows.slice(0, k).map(([idx, _]) => idx);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    4
  )
);
