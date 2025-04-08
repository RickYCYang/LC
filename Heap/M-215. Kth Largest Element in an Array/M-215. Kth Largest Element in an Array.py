from typing import Union


class MaxHeap:
    def __init__(self) -> None:
        self.heap: list[int] = []

    def push(self, value: int) -> None:
        self.heap.append(value)
        self.heapify_up(len(self.heap) - 1)

    def pop(self) -> Union[int, None]:
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        return root

    def heapify_up(self, idx: int):
        parent_idx = (idx - 1) // 2
        if parent_idx >= 0 and self.heap[idx] > self.heap[parent_idx]:
            self.heap[idx], self.heap[parent_idx] = (
                self.heap[parent_idx],
                self.heap[idx],
            )
            self.heapify_up(parent_idx)

    def heapify_down(self, idx: int):
        left_idx, right_idx = idx * 2 + 1, idx * 2 + 2
        largest_idx = idx
        if left_idx < len(self.heap) and self.heap[left_idx] > self.heap[largest_idx]:
            largest_idx = left_idx
        if right_idx < len(self.heap) and self.heap[right_idx] > self.heap[largest_idx]:
            largest_idx = right_idx
        if idx != largest_idx:
            self.heap[idx], self.heap[largest_idx] = (
                self.heap[largest_idx],
                self.heap[idx],
            )
            self.heapify_down(largest_idx)

    def top(self) -> int:
        return self.heap[0]

    def size(self) -> int:
        return len(self.heap)


class Solution:
    @classmethod
    def findKthLargest(self, nums: list[int], k: int) -> int:
        max_heap = MaxHeap()
        for num in nums:
            max_heap.push(num)
            if max_heap.size() > len(nums) - k + 1:
                max_heap.pop()
        return max_heap.top()


testData = [
    {"nums": [3, 2, 1, 5, 6, 4], "k": 2, "ans": 5},
    {"nums": [3, 2, 3, 1, 2, 4, 5, 5, 6], "k": 4, "ans": 4},
]

for data in testData:
    print(data["ans"] == Solution.findKthLargest(data["nums"], data["k"]))
