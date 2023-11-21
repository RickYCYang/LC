class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        current_sum = 0
        max_freq = 0

        l, r = 0, 0
        while r < len(nums):
            current_sum += nums[r]

            if current_sum + k < nums[r] * (r - l + 1):
                current_sum -= nums[l]
                l += 1

            max_freq = max(max_freq, r - l + 1)
            r += 1

        return max_freq
