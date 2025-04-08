class Solution:
    @classmethod
    def minAbsoluteSumDiff(self, nums1: list[int], nums2: list[int]) -> int:
        n = len(nums1)
        orig_abs_sum_diffs = []
        orig_abs_sum_diff = 0

        for num1, num2 in zip(nums1, nums2):
            abs_diff = abs(num1 - num2)
            orig_abs_sum_diff += abs_diff
            orig_abs_sum_diffs.append(abs_diff)

        min_abs_sum_diff = orig_abs_sum_diff
        nums1.sort()
        for orig_diff, num2 in zip(orig_abs_sum_diffs, nums2):
            min_diff = Solution.binary_search(n, nums1, num2, orig_diff)
            new_abs_sum_diff = orig_abs_sum_diff - orig_diff + min_diff
            min_abs_sum_diff = min(min_abs_sum_diff, new_abs_sum_diff)

        return min_abs_sum_diff % (10**9 + 7)

    @classmethod
    def binary_search(self, n, nums1, num2, orig_diff):
        l, r = 0, n - 1
        min_diff = orig_diff

        while l <= r:
            mid = (l + r) >> 1
            abs_diff = abs(nums1[mid] - num2)

            if abs_diff < min_diff:
                min_diff = abs_diff
                if abs_diff == 0:
                    return min_diff

            if nums1[mid] < num2:
                l = mid + 1
            else:
                r = mid - 1

        return min_diff


testData = [
    {
        "nums1": [1, 7, 5],
        "nums2": [2, 3, 5],
        "ans": 3,
    },
    {
        "nums1": [2, 4, 6, 8, 10],
        "nums2": [2, 4, 6, 8, 10],
        "ans": 0,
    },
    {
        "nums1": [1, 10, 4, 4, 2, 7],
        "nums2": [9, 3, 5, 1, 7, 4],
        "ans": 20,
    },
    {
        "nums1": [1, 28, 21],
        "nums2": [9, 21, 20],
        "ans": 9,
    },
    {
        "nums1": [9, 20, 20, 21, 50],
        "nums2": [9, 21, 20, 21, 1],
        "ans": 9,
    },
]

for data in testData:
    print(data["ans"] == Solution.minAbsoluteSumDiff(data["nums1"], data["nums2"]))
