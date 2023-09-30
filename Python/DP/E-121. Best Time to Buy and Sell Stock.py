import sys


class Solution:
    @classmethod
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profit = 0
        curr_min_price = sys.maxsize
        for price in prices:
            curr_min_price = min(price, curr_min_price)
            curr_profit = price - curr_min_price
            max_profit = max(max_profit, curr_profit)

        return max_profit


testData = [
    [7, 1, 5, 3, 6, 4],  # 5
    [7, 6, 4, 3, 1],  # 0
]

for data in testData:
    print(Solution.maxProfit(data))
