import heapq


class Solution:
    @classmethod
    def maxSubsequence(self, nums: list[int], k: int) -> list[int]:
        max_heap = []
        for i, num in enumerate(nums):
            heapq.heappush(max_heap, (-num, i))

        arr = [None] * len(nums)
        for i in range(k):
            num, orig_i = heapq.heappop(max_heap)
            arr[orig_i] = -num

        return [num for num in arr if num is not None]


# expected [-8,-94,-30,-98,-27,62,26]
print(Solution.maxSubsequence([-8, -94, -30, -98, -27, 62, 26], 7))
