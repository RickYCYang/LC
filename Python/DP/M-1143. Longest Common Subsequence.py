class Solution:
    @classmethod
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])
        return dp[m][n]


testData = [
    {
        "text1": "abcde",
        "text2": "ace",
        "ans": 3,
    },
    {
        "text1": "abc",
        "text2": "abc",
        "ans": 3,
    },
    {
        "text1": "abc",
        "text2": "def",
        "ans": 0,
    },
]

for data in testData:
    print(
        data["ans"] == Solution.longestCommonSubsequence(data["text1"], data["text2"])
    )
