class Solution:
    @classmethod
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        n = len(nums)
        result = []
        multiplier = 1
        for i in range(n):
            result.append(multiplier)
            multiplier *= nums[i]
        multiplier = 1
        for i in range(n - 1, -1, -1):
            result[i] *= multiplier
            multiplier *= nums[i]
        return result


testData = [
    {
        "nums": [1, 2, 3, 4],
        "ans": [24, 12, 8, 6],
    },
    {
        "nums": [-1, 1, 0, -3, 3],
        "ans": [0, 0, 9, 0, 0],
    },
]

for data in testData:
    print(data["ans"] == Solution.productExceptSelf(data["nums"]))
