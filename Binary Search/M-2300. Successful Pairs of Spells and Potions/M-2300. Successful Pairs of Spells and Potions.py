class Solution:
    @classmethod
    def successfulPairs(
        self, spells: list[int], potions: list[int], success: int
    ) -> list[int]:
        def bs(spell: int, potions: list[int], success: int) -> int:
            l, r = 0, len(potions) - 1
            while l <= r:
                mid = (l + r) // 2
                product = spell * potions[mid]
                if product < success:
                    l = mid + 1
                else:
                    r = mid - 1
            return l

        n, m = len(spells), len(potions)
        result = [None for _ in range(n)]
        potions.sort()
        for i in range(n):
            pair = bs(spells[i], potions, success)
            result[i] = 0 if pair == m else m - pair
        return result


testData = [
    {
        "spells": [5, 1, 3],
        "potions": [1, 2, 3, 4, 5],
        "success": 7,
        "ans": [4, 0, 3],
    },
    {
        "spells": [3, 1, 2, 4],
        "potions": [8, 5, 8],
        "success": 16,
        "ans": [2, 0, 2, 3],
    },
]

for data in testData:
    print(
        data["ans"]
        == Solution.successfulPairs(data["spells"], data["potions"], data["success"])
    )
