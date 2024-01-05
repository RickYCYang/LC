function largestAltitude(gain: number[]): number {
  let [maxAltitude, curAltitde] = [0, 0];
  for (let g of gain) {
    curAltitde += g;
    maxAltitude = Math.max(maxAltitude, curAltitde);
  }
  return maxAltitude;
}

const testData = [
  {
    nums: [-5, 1, 5, 0, -7],
    ans: 1,
  },
  {
    nums: [-4, -3, -2, -1, 4, 3, 2],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data['ans'] === largestAltitude(data['nums']));
}
