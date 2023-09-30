class Solution:
    @classmethod
    def majorityElement(self, nums) -> int:
        dict = {}
        threshold = len(nums) / 2
        for num in nums:
            count = (dict.get(num) or 0) + 1
            if count > threshold:
                return num
            dict[num] = count


test_data = [
    [3, 2, 3],
    [2, 2, 1, 1, 1, 2, 2],
]
for data in test_data:
    print(Solution.majorityElement(data))
