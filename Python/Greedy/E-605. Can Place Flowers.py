class Solution:
    @classmethod
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        if n == 0:
            return True

        length_of_flowerbed = len(flowerbed)
        for i in range(length_of_flowerbed):
            if (
                flowerbed[i]
                or (i < length_of_flowerbed - 1 and flowerbed[i + 1])
                or (i > 0 and flowerbed[i - 1])
            ):
                continue

            flowerbed[i] = 1
            n -= 1

            if n == 0:
                return True

        return False


testData = [
    {"flowerbed": [1, 0, 0, 0, 1], "n": 1, "ans": True},
    {"flowerbed": [1, 0, 0, 0, 1], "n": 2, "ans": False},
    {"flowerbed": [1, 0, 1, 0, 1, 0, 1], "n": 0, "ans": True},
]

for data in testData:
    print(data["ans"] == Solution.canPlaceFlowers(data["flowerbed"], data["n"]))
