class Solution:
    @classmethod
    def rotate(self, nums, k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 0:
            return
        k = k % len(nums)
        nums[:] = nums[-k:] + nums[:-k]


testData = [
    {"arr": [1, 2, 3, 4, 5, 6, 7], "k": 3},  # [5,6,7,1,2,3,4]
    {"arr": [-1, -100, 3, 99], "k": 2},  # [3,99,-1,-100],
    {"arr": [1, 2], "k": 5},  # [2,1]


]

for data in testData:
    print("data", data)
    Solution.rotate(data["arr"], data["k"])
    print(data["arr"])
