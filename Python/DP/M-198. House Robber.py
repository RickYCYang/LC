class Solution:
    @classmethod
    def rob(self, nums: list[int]) -> int:
        n = len(nums)
        dp = [0 for _ in range(n)]
        dp[0] = nums[0]
        for i in range(1, n):
            prev = dp[i - 2] if i >= 2 else 0
            dp[i] = max(prev + nums[i], dp[i - 1])

        return dp[n - 1]


testData = [
    {
        "nums": [1, 2, 3, 1],
        "ans": 4,
    },
    {
        "nums": [2, 7, 9, 3, 1],
        "ans": 12,
    },
]

for data in testData:
    print(data["ans"] == Solution.rob(data["nums"]))
