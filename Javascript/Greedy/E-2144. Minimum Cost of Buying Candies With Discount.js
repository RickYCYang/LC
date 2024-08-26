/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  // [2, 2, 5, 6, 7, 9]
  // => 9 + 7 + 5 + 2 = 23
  let minCost = 0;
  let count = 1;
  cost.sort((a, b) => a - b);
  while (cost.length > 0) {
    if (count++ % 3 > 0) minCost += cost.pop();
    else cost.pop();
  }

  return minCost;
};
