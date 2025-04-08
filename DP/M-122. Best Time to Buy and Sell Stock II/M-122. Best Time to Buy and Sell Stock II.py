class Solution:
    @classmethod
    def maxProfit(self, prices) -> int:
        ttl_profit = 0
        for i in range(1, len(prices)):
            profit = prices[i] - prices[i - 1]
            if profit > 0:
                ttl_profit += profit

        return ttl_profit


testData = [
    [7, 1, 5, 3, 6, 4],  # 7
    [1, 2, 3, 4, 5],  # 4
    [7, 6, 4, 3, 1],  # 0
]

for data in testData:
    print(Solution.maxProfit(data))
