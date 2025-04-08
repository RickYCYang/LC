/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let currMinPrice = Infinity;
  for (const price of prices) {
    currMinPrice = Math.min(currMinPrice, price);
    currProfit = price - currMinPrice;
    maxProfit = Math.max(maxProfit, currProfit);
  }

  return maxProfit;
};

const testData = [
  [7, 1, 5, 3, 6, 4], //5
  [7, 6, 4, 3, 1], //0
];

for (const data of testData) {
  console.log(maxProfit(data));
}
