class Solution:
    @classmethod
    def numTilings(self, n: int) -> int:
        if n == 1 or n == 0:
            return 1
        if n == 2:
            return 2

        mod = 1e9 + 7
        dp = [0 for _ in range(n)]
        dp[0], dp[1], dp[2] = 1, 2, 5
        for i in range(3, n):
            dp[i] = int(((2 * dp[i - 1]) + dp[i - 3]) % mod)
        return dp[n - 1]


testData = [
    {
        "n": 3,
        "ans": 5,
    },
    {
        "n": 1,
        "ans": 1,
    },
    {"n": 5, "ans": 24},
]

for data in testData:
    print(data["ans"] == Solution.numTilings(data["n"]))
