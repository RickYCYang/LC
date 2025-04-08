
class Solution:
    def removeDuplicates(self, nums) -> int:
        nums_map = {}
        i = 0
        while i <= len(nums) - 1:
            if nums_map.get(nums[i]) and nums_map.get(nums[i]) >= 2:
                nums[i: i+1] = []
            else:
                nums_map[nums[i]] = (nums_map.get(nums[i]) or 0) + 1
                i = i + 1
        return len(nums)
