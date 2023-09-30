class Solution:
    @classmethod
    def longestSubarray(self, nums, limit):
        n = len(nums)
        l = 0
        ans = 1
        while l < n:
            if l > 0 and nums[l] == nums[l - 1]:
                l += 1
                continue

            r = l + 1
            cur_max_num, cur_min_num = nums[l], nums[l]
            cur_ans = 1
            while r < n:
                cur_max_num = max(cur_max_num, nums[r])
                cur_min_num = min(cur_min_num, nums[r])
                if abs(cur_max_num - cur_min_num) > limit:
                    break
                r += 1
                cur_ans += 1

            l += 1
            ans = max(ans, cur_ans)

        return ans


test_data = [
    {
        "nums": [8, 2, 4, 7],
        "limit": 4,
        "ans": 2,
    },
    {
        "nums": [10, 1, 2, 4, 7, 2],
        "limit": 5,
        "ans": 4,
    },
    {
        "nums": [4, 2, 2, 2, 4, 4, 2, 2],
        "limit": 0,
        "ans": 3,
    },
]

for data in test_data:
    print(data["ans"] == Solution.longestSubarray(data["nums"], data["limit"]))
