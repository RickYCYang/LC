function missingNumber(nums: number[]): number {
  const arr = Array(nums.length + 1).fill(-1);
  for (const num of nums) arr[num]++;
  for (const [i, num] of arr.entries()) {
    if (num === -1) return i;
  }
  return -1;
}
