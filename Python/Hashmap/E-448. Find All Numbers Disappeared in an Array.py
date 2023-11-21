class Solution:
    def findDisappearedNumbers(self, nums: list[int]) -> list[int]:
        nums_set = set(nums)
        result = []
        for i in range(1, len(nums) + 1):
            if i not in nums_set:
                result.append(i)

        return result
