class StockSpanner:
    def __init__(self) -> None:
        self.stack: list[dict] = []

    def next(self, price: int) -> int:
        span = 1
        while len(self.stack) and self.stack[len(self.stack) - 1]["price"] <= price:
            prev_stock = self.stack.pop()
            span += prev_stock["span"]
        self.stack.append({"price": price, "span": span})
        return span


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)

stockSpanner = StockSpanner()
print(stockSpanner.next(100))  # return 1
print(stockSpanner.next(80))  # return 1
print(stockSpanner.next(60))  # return 1
print(stockSpanner.next(70))  # return 2
print(stockSpanner.next(60))  # return 1
print(
    stockSpanner.next(75)
)  # return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
print(stockSpanner.next(85))  # return 6
