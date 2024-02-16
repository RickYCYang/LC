class RecentCounter:
    def __init__(self):
        self.queue = []

    def ping(self, t: int) -> int:
        min_of_range = t - 3000
        self.queue.append(t)
        while self.queue[0] < min_of_range:
            self.queue.pop(0)
        return len(self.queue)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
recentCounter = RecentCounter()
print(recentCounter.ping(1))
print(recentCounter.ping(100))
print(recentCounter.ping(3001))
print(recentCounter.ping(3002))
