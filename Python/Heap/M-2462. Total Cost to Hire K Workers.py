class MinHeap:
    def __init__(self) -> None:
        self.heap = []

    def append(self, num: int):
        self.heap.append(num)
        self.heapify_up(len(self.heap) - 1)

    def pop(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()

        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        return root

    def peek(self):
        return self.heap[0]

    def size(self):
        return len(self.heap)

    def heapify_up(self, idx):
        parent = idx - 1 >> 1
        if parent >= 0 and self.heap[parent] > self.heap[idx]:
            self.heap[idx], self.heap[parent] = self.heap[parent], self.heap[idx]
            self.heapify_up(parent)

    def heapify_down(self, idx):
        left, right = idx * 2 + 1, idx * 2 + 2
        smallest = idx
        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right
        if smallest != idx:
            self.heap[idx], self.heap[smallest] = self.heap[smallest], self.heap[idx]
            self.heapify_down(smallest)


class Solution:
    @classmethod
    def totalCost(self, costs: list[int], k: int, candidates: int) -> int:
        left, right = MinHeap(), MinHeap()
        start, end = 0, len(costs) - 1
        ttl_cost = 0

        while k > 0:
            if start <= end:
                if left.size() < candidates:
                    left.append(costs[start])
                    start += 1
                if right.size() < candidates and start <= end:
                    right.append(costs[end])
                    end -= 1
                if left.size() == candidates and right.size() == candidates:
                    if left.peek() <= right.peek():
                        ttl_cost += left.pop()
                    else:
                        ttl_cost += right.pop()
                    k -= 1
            else:
                while right.size():
                    left.append(right.pop())
                ttl_cost += left.pop()
                k -= 1
        return ttl_cost


testData = [
    {"costs": [17, 12, 10, 2, 7, 2, 11, 20, 8], "k": 3, "candidates": 4, "ans": 11},
    {"costs": [1, 2, 4, 1], "k": 3, "candidates": 3, "ans": 4},
    {
        "costs": [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58],
        "k": 11,
        "candidates": 2,
        "ans": 423,
    },
    {
        "costs": [
            18,
            64,
            12,
            21,
            21,
            78,
            36,
            58,
            88,
            58,
            99,
            26,
            92,
            91,
            53,
            10,
            24,
            25,
            20,
            92,
            73,
            63,
            51,
            65,
            87,
            6,
            17,
            32,
            14,
            42,
            46,
            65,
            43,
            9,
            75,
        ],
        "k": 13,
        "candidates": 23,
        "ans": 223,
    },
    {"costs": [10, 1, 11, 10], "k": 2, "candidates": 1, "ans": 11},
]

for data in testData:
    print(
        data["ans"] == Solution.totalCost(data["costs"], data["k"], data["candidates"])
    )
