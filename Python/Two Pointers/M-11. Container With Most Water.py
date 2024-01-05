import sys


class Solution:
    @classmethod
    def maxArea(self, height) -> int:
        max_area = -sys.maxsize
        l, r = 0, len(height) - 1
        while l < r:
            area = (r - l) * min(height[l], height[r])
            max_area = max(max_area, area)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return max_area


test_data = [
    {
        "height": [1, 8, 6, 2, 5, 4, 8, 3, 7],
        "ans": 49,
    },
    {
        "height": [1, 1],
        "ans": 1,
    },
]

for data in test_data:
    print(data["ans"] == Solution.maxArea(data["height"]))
