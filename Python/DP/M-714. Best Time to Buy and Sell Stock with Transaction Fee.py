class Solution:
    @classmethod
    def maxProfit(self, prices: list[int], fee: int) -> int:
        n = len(prices)
        cash = [0] * n
        hold = [0] * n
        hold[0] = -prices[0]
        for i in range(1, n):
            hold[i] = max(hold[i - 1], cash[i - 1] - prices[i])
            cash[i] = max(cash[i - 1], hold[i - 1] + prices[i] - fee)

        return cash[n - 1]


testData = [
    {
        "prices": [3, 1, 2, 8, 4, 9],
        "fee": 2,
        "ans": 8,
    },
    {
        "prices": [1, 3, 7, 5, 10, 3],
        "fee": 3,
        "ans": 6,
    },
]

for data in testData:
    print(data["ans"] == Solution.maxProfit(data["prices"], data["fee"]))
