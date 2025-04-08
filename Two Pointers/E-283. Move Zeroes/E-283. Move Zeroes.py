class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        l, r = 0, 0
        zeros = []
        while r < len(nums):
            while r < len(nums) and nums[r] == 0:
                zeros.append(0)
                r += 1

            if r < len(nums):
                nums[l] = nums[r]
                l += 1
                r += 1
        nums[len(nums) - len(zeros) : len(nums)] = [*zeros]
