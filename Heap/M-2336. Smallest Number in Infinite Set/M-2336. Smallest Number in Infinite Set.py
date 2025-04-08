class SmallestInfiniteSet:
    def __init__(self):
        self.min_heap = [i + 1 for i in range(1000)]
        self.nums = set(self.min_heap)

    def popSmallest(self) -> int:
        if len(self.min_heap) == 0:
            return None

        if len(self.min_heap) == 1:
            root = self.min_heap.pop()
            self.nums.remove(root)
            return root

        root = self.min_heap[0]
        self.nums.remove(root)
        self.min_heap[0] = self.min_heap.pop()
        self.__heapify_down(0)
        return root

    def addBack(self, num: int) -> None:
        if num not in self.nums:
            self.nums.add(num)
            self.min_heap.append(num)
            self.__heapify_up(len(self.min_heap) - 1)

    def __heapify_up(self, idx: int) -> None:
        parent_idx = (idx - 1) // 2
        if parent_idx >= 0 and self.min_heap[parent_idx] > self.min_heap[idx]:
            self.min_heap[parent_idx], self.min_heap[idx] = (
                self.min_heap[idx],
                self.min_heap[parent_idx],
            )
            self.__heapify_up(parent_idx)

    def __heapify_down(self, idx: int) -> None:
        left_idx, right_idx = idx * 2 + 1, idx * 2 + 2
        smallest_idx = idx
        if (
            left_idx < len(self.min_heap)
            and self.min_heap[left_idx] < self.min_heap[smallest_idx]
        ):
            smallest_idx = left_idx
        if (
            right_idx < len(self.min_heap)
            and self.min_heap[right_idx] < self.min_heap[smallest_idx]
        ):
            smallest_idx = right_idx

        if smallest_idx != idx:
            self.min_heap[smallest_idx], self.min_heap[idx] = (
                self.min_heap[idx],
                self.min_heap[smallest_idx],
            )
            self.__heapify_down(smallest_idx)


# Your SmallestInfiniteSet object will be instantiated and called as such:
obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)


""" You can simply use heapq lib """
# import heapq

# class SmallestInfiniteSet:

#     def __init__(self):
#         self.nums = [i+1 for i in range(1000)]
#         heapq.heapify(self.nums)

#     def popSmallest(self) -> int:
#         return heapq.heappop(self.nums)


#     def addBack(self, num: int) -> None:
#         if num in self.nums:
#             return
#         heapq.heappush(self.nums, num)
