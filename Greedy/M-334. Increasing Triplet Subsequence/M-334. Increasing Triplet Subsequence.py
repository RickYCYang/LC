import sys


class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first_num = sys.maxsize
        second_num = sys.maxsize

        for num in nums:
            if num > second_num and second_num > first_num:
                return True

            if num > first_num:
                second_num = num
            else:
                first_num = num

        return False
