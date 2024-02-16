class Solution:
    @classmethod
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0 for _ in range(n)] for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[i][j] = 1
                else:
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        return dp[m - 1][n - 1]


test_data = [
    {"m": 3, "n": 7, "ans": 28},
    {"m": 3, "n": 2, "ans": 3},
]

for data in test_data:
    print(data["ans"] == Solution.uniquePaths(data["m"], data["n"]))
