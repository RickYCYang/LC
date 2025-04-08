function applyOperations(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  //console.log('nums', nums);
  let [l, r] = [0, 0];
  let zeros = 0;
  while (r < n) {
    while (nums[r] === 0) {
      r++;
      zeros++;
    }
    nums[l++] = nums[r++];
  }
  //console.log(nums, zeros);
  nums.splice(n - zeros, zeros, ...Array(zeros).fill(0));
  return nums;
}
