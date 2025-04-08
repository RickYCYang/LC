function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [[], []];
  const [nums1Set, nums2Set] = [new Set(nums1), new Set(nums2)];
  for (const num of nums1Set) {
    if (!nums2Set.has(num)) result[0].push(num);
  }
  for (const num of nums2Set) {
    if (!nums1Set.has(num)) result[1].push(num);
  }
  return result;
}

const testData = [
  {
    nums1: [1, 2, 3],
    nums2: [2, 4, 6],
    ans: [
      [1, 3],
      [4, 6],
    ],
  },
  {
    nums1: [1, 2, 3, 3],
    nums2: [1, 1, 2, 2],
    ans: [[3], []],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(findDifference(data['nums1'], data['nums2']))
  );
}
