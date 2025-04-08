function singleNumber(nums: number[]): number {
  let value = 0;
  for (const num of nums) value = value ^ num;
  return value;
}

const testData = [
  { nums: [2, 2, 1], ans: 1 },
  { nums: [4, 1, 2, 1, 2], ans: 4 },
  { nums: [1], ans: 1 },
];

for (const data of testData) {
  console.log(data.ans === singleNumber(data.nums));
}
