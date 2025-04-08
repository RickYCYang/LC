class Solution:
    @classmethod
    def pivotIndex(self, nums: list[int]) -> int:
        ttl_sum = sum(nums)
        left_sum = 0
        for i in range(len(nums)):
            if left_sum == (ttl_sum - nums[i]) / 2:
                return i
            left_sum += nums[i]
        return -1


testData = [
    {
        "nums": [1, 7, 3, 6, 5, 6],
        "ans": 3,
    },
    {
        "nums": [1, 2, 3],
        "ans": -1,
    },
    {
        "nums": [2, 1, -1],
        "ans": 0,
    },
    {"nums": [-1, -1, -1, -1, -1, -1], "ans": -1},
]

for data in testData:
    print(data["ans"] == Solution.pivotIndex(data["nums"]))
