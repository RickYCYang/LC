class Solution:
    @classmethod
    def findPeakElement(self, nums: list[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if mid < len(nums) - 1 and nums[mid] > nums[mid + 1]:
                r = mid
            else:
                l = mid + 1
        return l


testData = [
    {
        "nums": [1, 2, 3, 1],
        "ans": 2,
    },
    {
        "nums": [1, 2, 1, 3, 5, 6, 4],
        "ans": 5,
    },
    {"nums": [-2147483648], "ans": 0},
    {"nums": [3, 2, 1], "ans": 0},
]

for data in testData:
    print(data["ans"] == Solution.findPeakElement(data["nums"]))
