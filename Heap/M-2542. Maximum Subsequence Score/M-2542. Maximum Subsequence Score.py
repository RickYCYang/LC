import sys
from typing import Union


class MinHeap:
    def __init__(self) -> None:
        self.heap: list[int] = []

    def push(self, num: int):
        self.heap.append(num)
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

    def heapify_up(self, idx: int) -> None:
        parent = (idx - 1) >> 1
        if parent >= 0 and self.heap[idx] < self.heap[parent]:
            self.heap[idx], self.heap[parent] = (
                self.heap[parent],
                self.heap[idx],
            )
            self.heapify_up(parent)

    def heapify_down(self, idx: int) -> None:
        l, r = idx * 2 + 1, idx * 2 + 2
        smallest = idx
        if l < len(self.heap) and self.heap[l] < self.heap[smallest]:
            smallest = l
        if r < len(self.heap) and self.heap[r] < self.heap[smallest]:
            smallest = r
        if smallest != idx:
            self.heap[idx], self.heap[smallest] = (
                self.heap[smallest],
                self.heap[idx],
            )
            self.heapify_down(smallest)

    def size(self):
        return len(self.heap)


class Solution:
    @classmethod
    def maxScore(self, nums1: list[int], nums2: list[int], k: int) -> int:
        merged_nums = sorted(
            [(nums1[i], nums2[i]) for i in range(len(nums1))],
            key=lambda x: x[1],
            reverse=True,
        )
        min_heap = MinHeap()
        nums1_sum = 0
        result = -sys.maxsize
        for num1, num2 in merged_nums:
            min_heap.push(num1)
            nums1_sum += num1
            if min_heap.size() > k:
                nums1_sum -= min_heap.pop()
            if min_heap.size() == k:
                result = max(result, nums1_sum * num2)
        return result


testData = [
    {"nums1": [1, 3, 3, 2], "nums2": [2, 1, 3, 4], "k": 3, "ans": 12},
    {"nums1": [4, 2, 3, 1, 1], "nums2": [7, 5, 10, 9, 6], "k": 1, "ans": 30},
]

for data in testData:
    print(data["ans"] == Solution.maxScore(data["nums1"], data["nums2"], data["k"]))
