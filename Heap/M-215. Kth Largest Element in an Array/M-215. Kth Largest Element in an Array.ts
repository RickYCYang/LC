class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  push(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() as number;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.heapifyDown(0);
    return root;
  }

  heapifyUp(idx): void {
    const parentIdx = (idx - 1) >> 1;
    if (parentIdx >= 0 && this.heap[idx] > this.heap[parentIdx]) {
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(idx): void {
    const [leftIdx, rightIdx] = [idx * 2 + 1, idx * 2 + 2];
    let largestIdx = idx;
    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx] > this.heap[largestIdx]
    ) {
      largestIdx = leftIdx;
    }
    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] > this.heap[largestIdx]
    ) {
      largestIdx = rightIdx;
    }
    if (largestIdx !== idx) {
      [this.heap[idx], this.heap[largestIdx]] = [
        this.heap[largestIdx],
        this.heap[idx],
      ];
      this.heapifyDown(largestIdx);
    }
  }

  top(): number {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = new MaxHeap();
  for (const num of nums) {
    maxHeap.push(num);
    if (maxHeap.size() > nums.length - k + 1) maxHeap.pop();
  }
  return maxHeap.top();
}

const testData = [
  { nums: [3, 2, 1, 5, 6, 4], k: 2, ans: 5 },
  { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, ans: 4 },
];

for (const data of testData) {
  console.log(data['ans'] === findKthLargest(data['nums'], data['k']));
}
