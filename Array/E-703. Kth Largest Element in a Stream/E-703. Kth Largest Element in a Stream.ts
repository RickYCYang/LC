class KthLargest {
  sortedNums: number[] = [];
  k: number;
  constructor(k: number, nums: number[]) {
    this.sortedNums = nums;
    this.k = k;
  }

  add(val: number): number {
    this.sortedNums.push(val);
    this.sortedNums.sort((a, b) => b - a);
    return this.sortedNums[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
