/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let [l, r] = [0, 0];
  const zeros: number[] = [];
  while (r < nums.length) {
    while (nums[r] === 0) {
      zeros.push(0);
      r++;
    }
    nums[l++] = nums[r++];
  }
  nums.splice(nums.length - zeros.length, zeros.length, ...zeros);
}
