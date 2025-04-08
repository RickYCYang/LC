/** solution 2: two pointers */
function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  let sum = 0;

  for (let l = 0; l < n - 2; ) {
    let r = l;
    let diff = nums[l + 1] - nums[l];
    while (r + 1 < n && nums[r + 1] - nums[r] === diff) r++;
    const length = r - l + 1;
    const a1 = 1;
    const an = length - 3 + 1;
    const count = ((a1 + an) * an) / 2;
    sum += count;
    l = r;
  }

  return sum;
}

const testData = [
  {
    nums: [1, 2, 3, 4],
    ans: 3,
  },
  {
    nums: [1],
    ans: 0,
  },
];

for (const data of testData) {
  console.log(data.ans === numberOfArithmeticSlices(data.nums));
}
