class Solution:
    @classmethod
    def jump(self, nums) -> int:
        size = len(nums)
        desination = size - 1
        cur_coverage = 0
        last_jump_idx = 0
        jump_times = 0

        if size <= 1:
            return jump_times

        for i in range(size):
            cur_coverage = max(cur_coverage, nums[i] + i)

            if last_jump_idx == i:
                last_jump_idx = cur_coverage
                jump_times = jump_times + 1

                if cur_coverage >= desination:
                    return jump_times

        return jump_times


test_data = [
    [0],  # 0
    [2, 3, 1, 1, 4],  # 2
    [2, 3, 0, 1, 4],  # 2
    [2, 1],  # 1
    [1, 2, 3],  # 2
]

for data in test_data:
    print(Solution.jump(data))
