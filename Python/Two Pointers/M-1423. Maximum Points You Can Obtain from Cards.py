class Solution:
    @classmethod
    def maxScore(self, cardPoints: list[int], k: int) -> int:
        n = len(cardPoints)
        cur_sum = 0
        for i in range(k):
            cur_sum += cardPoints[i]

        max_score = cur_sum
        for i in range(k - 1, -1, -1):
            j = n - (k - i)
            cur_sum = cur_sum - cardPoints[i] + cardPoints[j]
            max_score = max(cur_sum, max_score)

        return max_score


test_data = [
    {
        "cards": [1, 2, 3, 4, 5, 6, 1],
        "k": 3,
        "ans": 12,
    },
    {
        "cards": [2, 2, 2],
        "k": 2,
        "ans": 4,
    },
    {
        "cards": [9, 7, 7, 9, 7, 7, 9],
        "k": 7,
        "ans": 55,
    },
    {
        "cards": [100, 40, 17, 9, 73, 75],
        "k": 3,
        "ans": 248,
    },
]

for data in test_data:
    print(data["ans"] == Solution.maxScore(data["cards"], data["k"]))
