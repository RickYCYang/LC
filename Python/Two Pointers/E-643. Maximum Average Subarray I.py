import sys


class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        max_avg = -sys.maxsize
        l, r, sum = 0, 0, 0

        while r < len(nums):
            sum += nums[r]
            if r - l == k - 1:
                avg = sum / k
                max_avg = max(max_avg, avg)
                sum -= nums[l]
                l += 1
            r += 1

        return max_avg
