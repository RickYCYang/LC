class Solution:
    @classmethod
    def maxOperations(self, nums: list[int], k: int) -> int:
        nums.sort()
        l, r = 0, len(nums) - 1
        operations = 0
        while l < r:
            if nums[l] + nums[r] == k:
                operations += 1
                l += 1
                r -= 1
            elif nums[l] + nums[r] < k:
                l += 1
            else:
                r -= 1
        return operations


testData = [
    {
        "nums": [1, 2, 3, 4],
        "k": 5,
        "ans": 2,
    },
    {
        "nums": [3, 1, 3, 4, 3],  # [1, 3, 3, 3, 4]
        "k": 6,
        "ans": 1,
    },
]

for data in testData:
    print(data["ans"] == Solution.maxOperations(data["nums"], data["k"]))
