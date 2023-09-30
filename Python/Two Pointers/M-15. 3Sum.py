class Solution:
    @classmethod
    def threeSum(self, nums):
        if len(nums) < 3:
            return []

        n = len(nums)
        nums.sort()
        result = []
        i = 0
        while i < n:
            l = i + 1
            r = n - 1
            while l < r:
                sum = nums[i] + nums[l] + nums[r]
                if sum > 0:
                    r -= 1
                if sum < 0:
                    l += 1
                if sum == 0:
                    result.append([nums[i], nums[l], nums[r]])
                    while i + 1 < n and nums[i] == nums[i+1]:
                        i += 1
                    while l + 1 < n and nums[l] == nums[l+1]:
                        l += 1
                    while r - 1 >= 0 and nums[r] == nums[r-1]:
                        r -= 1
                    l += 1
                    r -= 1
            i += 1

        return result


test_data = [
    {
        "nums": [-1, 0, 1, 2, -1, -4],  # [-4, -1, -1, 0, 1, 2]
        "ans": [
            [-1, -1, 2],
            [-1, 0, 1],
        ],
    },
    {
        "nums": [0, 1, 1],
        "ans": [],
    },
    {
        "nums": [0, 0, 0],
        "ans": [[0, 0, 0]],
    },
    {
        "nums": [-1, 0, 1, 2, -1, -4],
        "ans": [
            [-1, -1, 2],
            [-1, 0, 1],
        ],
    },
]

for data in test_data:
    print(data["ans"] == Solution.threeSum(data["nums"]))
