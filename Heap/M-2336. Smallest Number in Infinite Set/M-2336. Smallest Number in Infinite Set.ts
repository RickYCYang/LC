class SmallestInfiniteSet {
  heap: number[];
  nums: Set<number>;
  constructor() {
    this.heap = new Array(1000).fill(null).map((_, key) => key + 1);
    this.nums = new Set(this.heap);
  }

  popSmallest(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) {
      const num = this.heap.pop() as number;
      this.nums.delete(num);
      return num;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.heapifyDown(0);
    this.nums.delete(root);
    return root;
  }

  addBack(num: number): void {
    if (!this.nums.has(num)) {
      this.nums.add(num);
      this.heap.push(num);
      this.heapifyUp(this.heap.length - 1);
    }
  }

  private heapifyDown(idx: number): void {
    const [leftIdx, rightIdx] = [idx * 2 + 1, idx * 2 + 2];
    let smallestIdx = idx;
    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx] < this.heap[smallestIdx]
    ) {
      smallestIdx = leftIdx;
    }
    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] < this.heap[smallestIdx]
    ) {
      smallestIdx = rightIdx;
    }
    if (idx !== smallestIdx) {
      [this.heap[smallestIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallestIdx],
      ];
      this.heapifyDown(smallestIdx);
    }
  }

  private heapifyUp(idx: number): void {
    const parentIdx = (idx - 1) >> 1; // 1, 2 -> 0 and 3, 4 -> 1
    if (parentIdx >= 0 && this.heap[parentIdx] > this.heap[idx]) {
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

var obj = new SmallestInfiniteSet();
