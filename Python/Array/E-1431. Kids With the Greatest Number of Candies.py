class Solution:
    @classmethod
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_candies = max(candies)
        result = [True if c + extraCandies >= max_candies else False for c in candies]
        return result


testData = [
    {
        "candies": [2, 3, 5, 1, 3],
        "extraCandies": 3,
        "ans": [True, True, True, False, True],
    },
]

for data in testData:
    print(
        data["ans"] == Solution.kidsWithCandies(data["candies"], data["extraCandies"])
    )
