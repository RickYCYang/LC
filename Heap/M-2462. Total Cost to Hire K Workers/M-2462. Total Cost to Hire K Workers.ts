class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  push(num: number): void {
    this.heap.push(num);
    this.heapifyUp(this.heap.length - 1);
  }
  pop(): number {
    if (this.heap.length === 0) throw new Error('heap is empty');
    if (this.heap.length === 1) return this.heap.pop() as number;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.heapifyDown(0);
    return root;
  }

  heapifyUp(idx: number): void {
    const parent = (idx - 1) >> 1;
    if (parent >= 0 && this.heap[parent] > this.heap[idx]) {
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
      this.heapifyUp(parent);
    }
  }

  heapifyDown(idx: number): void {
    const [left, right] = [idx * 2 + 1, idx * 2 + 2];
    let smallest = idx;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (idx !== smallest) {
      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function totalCost(costs: number[], k: number, candidates: number): number {
  const [left, right] = [new MinHeap(), new MinHeap()];
  let [start, end] = [0, costs.length - 1];
  let ttlCost = 0;
  while (k > 0) {
    if (start <= end) {
      if (left.size() < candidates) left.push(costs[start++]);
      if (right.size() < candidates && start <= end) right.push(costs[end--]);
      if (left.size() === candidates && right.size() === candidates) {
        if (left.peek() <= right.peek()) ttlCost += left.pop() as number;
        else ttlCost += right.pop() as number;
        k--;
      }
    } else {
      while (right.size()) left.push(right.pop() as number);
      ttlCost += left.pop() as number;
      k--;
    }
  }
  return ttlCost;
}

const testData = [
  { costs: [17, 12, 10, 2, 7, 2, 11, 20, 8], k: 3, candidates: 4, ans: 11 },
  { costs: [1, 2, 4, 1], k: 3, candidates: 3, ans: 4 },
  {
    costs: [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58],
    k: 11,
    candidates: 2,
    ans: 423,
  },
  {
    costs: [
      18, 64, 12, 21, 21, 78, 36, 58, 88, 58, 99, 26, 92, 91, 53, 10, 24, 25,
      20, 92, 73, 63, 51, 65, 87, 6, 17, 32, 14, 42, 46, 65, 43, 9, 75,
    ],
    k: 13,
    candidates: 23,
    ans: 223,
  },
  { costs: [10, 1, 11, 10], k: 2, candidates: 1, ans: 11 },
];

for (const data of testData) {
  console.log(
    data['ans'] === totalCost(data['costs'], data['k'], data['candidates'])
  );
}
