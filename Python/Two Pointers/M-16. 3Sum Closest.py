import sys


class Solution:
    @classmethod
    def threeSumClosest(self, nums, target: int) -> int:
        closest_sum = sys.maxsize
        n = len(nums)
        nums.sort()
        for i in range(n):
            l = i + 1
            r = n - 1
            while l < r:
                sum = nums[i] + nums[l] + nums[r]
                if sum == target:
                    return sum
                closest_sum = self.get_closest_num(sum, closest_sum, target)
                if sum > target:
                    r -= 1
                elif sum < target:
                    l += 1
        return closest_sum

    @classmethod
    def get_closest_num(self, a, b, target):
        if abs(a - target) < abs(b - target):
            return a
        return b


test_data = [
    {
        "nums": [-1, 2, 1, -4],
        "target": 1,
        "ans": 2,
    },
    {
        "nums": [0, 0, 0],
        "target": 1,
        "ans": 0,
    },
]

for data in test_data:
    print(data["ans"] == Solution.threeSumClosest(
        data["nums"], data["target"]))
