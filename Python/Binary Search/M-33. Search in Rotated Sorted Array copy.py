class Solution:
    @classmethod
    def search(self, nums: list[int], target: int) -> int:
        n = len(nums)
        if n == 1:
            return 0 if nums[0] == target else -1

        l, r = 0, n-1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                return mid

            if nums[l] <= nums[mid]:
                if nums[l] <= target and target <= nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1
            else:
                if target <= nums[r] and nums[mid] <= target:
                    l = mid + 1
                else:
                    r = mid - 1

        return -1


test_data = [
    {
        "nums": [6, 7, 0, 1, 2, 4, 5],
        "target": 0,
        "ans": 2,
    },
    {
        "nums": [4, 5, 6, 7, 0, 1, 2],
        "target": 3,
        "ans": -1,
    },
    {
        "nums": [1],
        "target": 0,
        "ans": -1,
    },
]

for data in test_data:
    print(data["ans"] == Solution.search(data["nums"], data["target"]))
