
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        unique_index = 0
        for i in range(len(nums)):
            if (nums[unique_index] != nums[i]):
                unique_index = unique_index + 1
                nums[unique_index] = nums[i]

        return unique_index + 1
