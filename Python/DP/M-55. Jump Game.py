class Solution:
    @classmethod
    def canJump(self, nums) -> bool:
        if len(nums) <= 1:
            return True

        max_next_step = nums[0]
        for i in range(len(nums)):
            if max_next_step <= i and nums[i] == 0:
                return False

            if nums[i] + i > max_next_step:
                max_next_step = nums[i] + i

            if max_next_step >= len(nums) - 1:
                return True

        return False


test_data = [
    [2, 3, 1, 1, 4],  # true
    [3, 2, 1, 0, 4],  # false
    [0],  # true
    [2, 0],  # true
    [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0],  # true
    [4, 2, 0, 0, 1, 0, 4, 4, 4, 0, 4, 0],  # true
]

for data in test_data:
    print(Solution.canJump(data))
