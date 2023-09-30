
class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        result = [-1] * n
        sum = 0
        slice_size = k * 2 + 1

        for i in range(n):
            sum += nums[i]
            if i >= k * 2:
                result[i - k] = math.floor(sum / slice_size)
                sum -= nums[i - k * 2]

        return result
