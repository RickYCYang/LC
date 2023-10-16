class KthLargest:

    def __init__(self, k: int, nums: list[int]):
        self.k = k
        self.sorted_arr = nums

    def add(self, val: int) -> int:
        self.sorted_arr.append(val)
        self.sorted_arr.sort(reverse=True)
        return self.sorted_arr[self.k - 1]

        # Your KthLargest object will be instantiated and called as such:
        # obj = KthLargest(k, nums)
        # param_1 = obj.add(val)
