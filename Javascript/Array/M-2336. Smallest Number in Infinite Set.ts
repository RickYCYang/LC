class SmallestInfiniteSet {
  hasNums: boolean[];

  constructor() {
    this.hasNums = new Array(1000).fill(true);
  }

  popSmallest(): number | null {
    for (let i = 0; i < this.hasNums.length; i++) {
      if (this.hasNums[i]) {
        this.hasNums[i] = false;
        return i + 1;
      }
    }
    return null;
  }

  addBack(num: number): void {
    this.hasNums[num - 1] = true;
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

var obj = new SmallestInfiniteSet();
obj.addBack(2);
console.log(obj.popSmallest()); // 1
console.log(obj.popSmallest()); // 2
console.log(obj.popSmallest()); // 3
obj.addBack(1);
console.log(obj.popSmallest()); // 1
console.log(obj.popSmallest()); // 4
console.log(obj.popSmallest()); // 5
