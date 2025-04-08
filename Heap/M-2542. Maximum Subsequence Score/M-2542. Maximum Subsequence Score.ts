class MinHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  push(num: number): void {
    this.heap.push(num);
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

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(idx: number): void {
    const parentIdx = (idx - 1) >> 1;
    if (parentIdx >= 0 && this.heap[idx] < this.heap[parentIdx]) {
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(idx: number): void {
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
      [this.heap[idx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[idx],
      ];
      this.heapifyDown(smallestIdx);
    }
  }
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
  const mergedNums = nums1
    .map((value, idx) => [value, nums2[idx]])
    .sort((a, b) => b[1] - a[1]);

  const minHeap = new MinHeap();
  let result = Number.MIN_SAFE_INTEGER;
  let sumOfNums1 = 0;
  for (const [num1, num2] of mergedNums) {
    minHeap.push(num1);
    sumOfNums1 += num1;
    if (minHeap.size() > k) sumOfNums1 -= minHeap.pop() as number;
    if (minHeap.size() === k) result = Math.max(result, sumOfNums1 * num2);
  }
  return result;
}

const testData = [
  { nums1: [1, 3, 3, 2], nums2: [2, 1, 3, 4], k: 3, ans: 12 },
  { nums1: [4, 2, 3, 1, 1], nums2: [7, 5, 10, 9, 6], k: 1, ans: 30 },
];

for (const data of testData) {
  console.log(
    data['ans'] === maxScore(data['nums1'], data['nums2'], data['k'])
  );
}
