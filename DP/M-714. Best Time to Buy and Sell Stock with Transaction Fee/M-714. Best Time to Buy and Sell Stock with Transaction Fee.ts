function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  const cash = new Array(n).fill(0);
  const hold = new Array(n).fill(0);
  hold[0] = -prices[0];
  for (let i = 1; i < n; i++) {
    hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i]);
    cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i] - fee);
  }
  return cash[n - 1];
}

const testData = [
  {
    prices: [3, 1, 2, 8, 4, 9],
    fee: 2,
    ans: 8,
  },
  {
    prices: [1, 3, 7, 5, 10, 3],
    fee: 3,
    ans: 6,
  },
];

for (const data of testData) {
  console.log(data.ans === maxProfit(data.prices, data.fee));
}
