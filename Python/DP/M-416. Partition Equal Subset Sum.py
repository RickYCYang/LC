class Solution:
    @classmethod
    def canPartition(self, nums: list[int]) -> bool:
        n = len(nums)
        ttl_num = sum(nums)
        if ttl_num % 2 != 0:
            return False

        half = ttl_num // 2
        dp = [[-1 for j in range(half+1)] for i in range(n)]

        for rem_wt in range(half + 1):
            first_item_val = nums[0]
            dp[0][rem_wt] = first_item_val if rem_wt >= first_item_val else 0

        for item_cnt in range(1, n):
            item_val = nums[item_cnt]
            for rem_wt in range(half + 1):
                not_picked_sum = dp[item_cnt - 1][rem_wt]
                picked_sum = dp[item_cnt - 1][rem_wt - item_val] + \
                    item_val if rem_wt >= item_val else 0
                dp[item_cnt][rem_wt] = max(not_picked_sum, picked_sum)

        return dp[n-1][half] == half


test_data = [
    {
        "nums": [5, 1, 11, 5],
        "ans": True,
    },
    {
        "nums": [1, 2, 3, 5],
        "ans": False,
    },
    {
        "nums": [1, 2, 5],
        "ans": False,
    },
]

for data in test_data:
    print(data["ans"] == Solution.canPartition(data["nums"]))
