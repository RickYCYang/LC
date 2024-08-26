import heapq


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max_heap_nums = [-num for num in nums]
        heapq.heapify(max_heap_nums)
        first_max = -heapq.heappop(max_heap_nums)
        second_max = -heapq.heappop(max_heap_nums)
        return (first_max - 1) * (second_max - 1)
