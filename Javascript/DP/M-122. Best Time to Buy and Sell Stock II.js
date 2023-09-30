/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ttlProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      ttlProfit += profit;
    }
  }
  return ttlProfit;
};

const testData = [
  [7, 1, 5, 3, 6, 4], //7
  [1, 2, 3, 4, 5], //4
  [7, 6, 4, 3, 1], //0
];

for (const data of testData) {
  console.log(maxProfit(data));
}
