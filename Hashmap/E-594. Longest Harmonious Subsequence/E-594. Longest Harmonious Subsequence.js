/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const freqMap = {};
  let lhs = 0;
  for (const num of nums) freqMap[num] = (freqMap[num] ?? 0) + 1;
  for (const [num, freq] of Object.entries(freqMap)) {
    const targetNum = num - 1;
    if (targetNum in freqMap) {
      lhs = Math.max(lhs, freq + freqMap[targetNum]);
    }
  }

  return lhs;
};
console.log(
  findLHS([
    0, 3, 0, 0, 1, 1, 1, 3, 1, 3, 2, 3, 2, 3, -1, 0, 2, 1, 0, 0, 0, 1, 3, 3, -3,
    3, 3, 1, 3,
  ])
);
