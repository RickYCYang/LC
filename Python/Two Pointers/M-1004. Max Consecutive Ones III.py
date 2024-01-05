class Solution:
    @classmethod
    def longestOnes(self, nums: list[int], k: int) -> int:
        cur_length, max_length = 0, 0
        l, r = 0, 0

        while r < len(nums):
            if nums[r] or k > 0:
                cur_length += 1
                max_length = max(max_length, cur_length)
                if not nums[r]:
                    k -= 1
                r += 1
                continue

            while k <= 0:
                cur_length -= 1
                if not nums[l]:
                    k += 1
                l += 1

        return max_length


testData = [
    {
        "nums": [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        "k": 2,
        "ans": 6,
    },
    {
        "nums": [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        "k": 3,
        "ans": 10,
    },
]

for data in testData:
    print(data["ans"] == Solution.longestOnes(data["nums"], data["k"]))
