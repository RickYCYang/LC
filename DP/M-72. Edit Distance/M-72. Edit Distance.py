"""
ref: https://rust-algo.club/levenshtein_distance/
"""


class Solution:
    @classmethod
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(m + 1):
            dp[i][0] = i
        for i in range(n + 1):
            dp[0][i] = i
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i][j] = min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + (1 if word1[i - 1] != word2[j - 1] else 0),
                )
        return dp[m][n]


testData = [
    {
        "word1": "horse",
        "word2": "ros",
        "ans": 3,
    },
    {
        "word1": "intention",
        "word2": "execution",
        "ans": 5,
    },
]

for data in testData:
    print(data["ans"] == Solution.minDistance(data["word1"], data["word2"]))
