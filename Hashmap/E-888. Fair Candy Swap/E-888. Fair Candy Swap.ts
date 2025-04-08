function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const bobSet = new Set();
  let aliceSum = 0;
  let bobSum = 0;

  for (let alice of aliceSizes) aliceSum += alice;
  for (let bob of bobSizes) {
    bobSet.add(bob);
    bobSum += bob;
  }

  const half = (aliceSum + bobSum) / 2;
  for (const aliceExchange of aliceSizes) {
    const bobExchange = half - (aliceSum - aliceExchange);
    if (bobSet.has(bobExchange)) return [aliceExchange, bobExchange];
  }
}

const testData = [
  {
    aliceSizes: [1, 1],
    bobSizes: [2, 2],
    ans: [1, 2],
  },
  {
    aliceSizes: [1, 2],
    bobSizes: [2, 3],
    ans: [1, 2],
  },
  {
    aliceSizes: [2],
    bobSizes: [1, 3],
    ans: [2, 3],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(fairCandySwap(data.aliceSizes, data.bobSizes))
  );
}
