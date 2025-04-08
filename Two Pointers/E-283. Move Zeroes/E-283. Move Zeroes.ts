/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): number[] {
  const n = nums.length;
  let [l, r] = [0, 0];
  let zeros = 0;

  while (r < n) {
    while (nums[r] === 0) {
      r++;
      zeros++;
    }
    nums[l++] = nums[r++];
  }

  nums.splice(n - zeros, zeros, ...Array(zeros).fill(0));
  return nums;
}

console.log(moveZeroes([0]));
