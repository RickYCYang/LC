class Solution:
    @classmethod
    def longestSubarray(self, nums: list[int]) -> int:
        cur_length, max_length = 0, 0
        l, r = 0, 0
        has_deleted = False

        while r < len(nums):
            if nums[r]:
                cur_length += 1
                max_length = max(cur_length, max_length)
                r += 1
                continue
            if not has_deleted:
                has_deleted = True
                r += 1
                continue
            while has_deleted:
                if nums[l]:
                    cur_length -= 1
                else:
                    has_deleted = False
                l += 1

        if max_length == len(nums):
            return max_length - 1
        else:
            return max_length


testData = [
    {
        "nums": [1, 1, 0, 1],
        "ans": 3,
    },
    {
        "nums": [0, 1, 1, 1, 0, 1, 1, 0, 1],
        "ans": 5,
    },
    {
        "nums": [1, 1, 1],
        "ans": 2,
    },
]

for data in testData:
    print(data["ans"] == Solution.longestSubarray(data["nums"]))
