class Solution:
    @classmethod
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        n = len(nums)
        result = [-1, -1]
        if n == 0:
            return result

        # find first target
        l, r = 0, n - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                result[0] = mid
                r = mid - 1
                continue

            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1

        # find last target
        l, r = 0, n - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                result[1] = mid
                l = mid + 1
                continue

            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1

        return result


test_data = [
    {
        "nums": [5, 7, 7, 8, 8, 10],
        "target": 8,
        "ans": [3, 4],
    },
    {
        "nums": [5, 7, 7, 8, 8, 10],
        "target": 6,
        "ans": [-1, -1],
    },
    {
        "nums": [],
        "target": 0,
        "ans": [-1, -1],
    },
]

for data in test_data:
    print(data["ans"] == Solution.searchRange(data["nums"], data["target"]))
