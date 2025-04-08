function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = [];
  let multiplier = 1;
  for (let i = 0; i < n; i++) {
    result.push(multiplier);
    multiplier *= nums[i];
  }
  multiplier = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= multiplier;
    multiplier *= nums[i];
  }
  return result;
}

const testData = [
  {
    nums: [1, 2, 3, 4],
    ans: [24, 12, 8, 6],
  },
  {
    nums: [-1, 1, 0, -3, 3],
    ans: [0, 0, 9, 0, 0],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data['ans']) ===
      JSON.stringify(productExceptSelf(data['nums']))
  );
}
