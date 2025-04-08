class Solution:
    @classmethod
    def fourSum(self, nums, target: int):
        if (len(nums) < 4):
            return []
        result = []
        n = len(nums)
        nums.sort()

        i = 0
        while i < n - 3:
            j = i + 1
            while j < n - 2:
                l = j + 1
                r = n - 1
                while l < r:
                    sum = nums[i] + nums[j] + nums[l] + nums[r]
                    if sum > target:
                        r -= 1
                    elif sum < target:
                        l += 1
                    else:
                        result.append([nums[i], nums[j], nums[l], nums[r]])
                        while (l + 1 < n and nums[l] == nums[l + 1]):
                            l += 1
                        while (r - 1 >= 0 and nums[r] == nums[r - 1]):
                            r -= 1
                        l += 1
                        r -= 1
                while (j + 1 < n and nums[j] == nums[j + 1]):
                    j += 1
                j += 1
            while (i + 1 < n and nums[i] == nums[i + 1]):
                i += 1
            i += 1
        return result


test_data = [
    {
        "nums": [1, 0, -1, 0, -2, 2],
        "target": 0,
        "ans": [
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1],
        ],
    },
    {
        "nums": [2, 2, 2, 2, 2],
        "target": 8,
        "ans": [[2, 2, 2, 2]],
    },
]

for data in test_data:
    print(data["ans"] == Solution.fourSum(data["nums"], data["target"]))
