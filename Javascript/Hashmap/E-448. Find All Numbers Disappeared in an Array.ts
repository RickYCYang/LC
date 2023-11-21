function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set<number>(nums);
  const result: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
}
