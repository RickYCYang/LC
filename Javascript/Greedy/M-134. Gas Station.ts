function canCompleteCircuit(gas: number[], cost: number[]): number {
  let position = 0;
  let ttlTank = 0;
  let curTank = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];
    ttlTank += gas[i] - cost[i];
    if (curTank < 0) {
      curTank = 0;
      position = i + 1;
    }
  }
  return ttlTank < 0 ? -1 : position;
}

const testData = [
  { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2], ans: 3 },
  {
    gas: [2, 3, 4],
    cost: [3, 4, 3],
    ans: -1,
  },
  {
    gas: [5, 1, 2, 3, 4], //5, 2,
    cost: [4, 4, 1, 5, 1],
    ans: 4,
  },
];

for (const data of testData) {
  console.log(data['ans'] === canCompleteCircuit(data['gas'], data['cost']));
}
