function maxOperations(nums: number[], k: number): number {
  let operations = 0;
  const map = new Map<number, number>();
  for (const num of nums) {
    const diff = k - num;
    if (!map.has(diff)) {
      map.set(num, (map.get(num) || 0) + 1);
      continue;
    }

    map.set(diff, (map.get(diff) || 0) - 1);
    if (!map.get(diff)) map.delete(diff);
    operations++;
  }

  return operations;
}

const testData = [
  {
    nums: [1, 2, 3, 4],
    k: 5,
    ans: 2,
  },
  {
    nums: [3, 1, 3, 4, 3], // [1, 3, 3, 3, 4]
    k: 6,
    ans: 1,
  },
];

for (const data of testData) {
  console.log(data['ans'] === maxOperations(data['nums'], data['k']));
}
