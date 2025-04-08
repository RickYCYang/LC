class Solution:
    @classmethod
    def findDifference(self, nums1: list[int], nums2: list[int]) -> list[list[int]]:
        nums1_set, nums2_set = set(nums1), set(nums2)
        result = [[], []]
        for num in nums1_set:
            if num not in nums2_set:
                result[0].append(num)
        for num in nums2_set:
            if num not in nums1_set:
                result[1].append(num)
        return result


testData = [
    {
        "nums1": [1, 2, 3],
        "nums2": [2, 4, 6],
        "ans": [
            [1, 3],
            [4, 6],
        ],
    },
    {
        "nums1": [1, 2, 3, 3],
        "nums2": [1, 1, 2, 2],
        "ans": [[3], []],
    },
]

for data in testData:
    print(data["ans"] == Solution.findDifference(data["nums1"], data["nums2"]))
