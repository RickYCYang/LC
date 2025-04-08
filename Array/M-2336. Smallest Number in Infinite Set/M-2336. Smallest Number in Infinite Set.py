class SmallestInfiniteSet:
    def __init__(self):
        self.has_nums = [True for _ in range(1000)]

    def popSmallest(self) -> int:
        for i in range(len(self.has_nums)):
            if self.has_nums[i]:
                self.has_nums[i] = False
                return i + 1

    def addBack(self, num: int) -> None:
        self.has_nums[num - 1] = True


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)


obj = SmallestInfiniteSet()
obj.addBack(2)
print(obj.popSmallest())  # 1
print(obj.popSmallest())  # 2
print(obj.popSmallest())  # 3
obj.addBack(1)
print(obj.popSmallest())  # 1
print(obj.popSmallest())  # 4
print(obj.popSmallest())  # 5
