class Solution:
    @classmethod
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        dp = [0 for _ in range(n + 1)]
        for i in range(2, n + 1):
            dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
        return dp[n]


testData = [
    {"cost": [10, 15, 20], "ans": 15},
    {"cost": [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], "ans": 6},
]

for data in testData:
    print(data["ans"] == Solution.minCostClimbingStairs(data["cost"]))
