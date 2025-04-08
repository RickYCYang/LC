function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += cardPoints[i];
  let max = sum;

  for (let i = k - 1, j = n - 1; i >= 0; i--, j--) {
    sum = sum - cardPoints[i] + cardPoints[j];
    max = Math.max(sum, max);
  }
  return max;
}

const testData = [
  {
    cards: [1, 2, 3, 4, 5, 6, 1],
    k: 3,
    ans: 12,
  },
  {
    cards: [2, 2, 2],
    k: 2,
    ans: 4,
  },
  {
    cards: [9, 7, 7, 9, 7, 7, 9],
    k: 7,
    ans: 55,
  },
  {
    cards: [100, 40, 17, 9, 73, 75],
    k: 3,
    ans: 248,
  },
];

for (const data of testData) {
  console.log(data.ans === maxScore(data.cards, data.k));
}
