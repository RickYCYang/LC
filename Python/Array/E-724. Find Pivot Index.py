class Solution:
    @classmethod
    def pivotIndex(self, nums: list[int]) -> int:
        n = len(nums)
        ttl = sum(nums)
        left_ttl = 0

        for pivot in range(n):
            if left_ttl == ttl - left_ttl - nums[pivot]:
                return pivot
            left_ttl += nums[pivot]

        return -1


test_data = [
    {
        "nums": [1, 7, 3, 6, 5, 6],
        "ans": 3,
    },
    {
        "nums": [1, 2, 3],
        "ans": -1,
    },
    {"nums": [2, 1, -1], "ans": 0},
    {"nums": [-1, -1, 0, 1, 1, 0], "ans": 5},
]

for data in test_data:
    print(data["ans"] == Solution.pivotIndex(data["nums"]))
