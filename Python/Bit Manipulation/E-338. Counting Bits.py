class Solution:
    @classmethod
    def countBits(self, n: int) -> list[int]:
        result = [0] * (n + 1)
        for i in range(1, n + 1):
            result[i] = result[i >> 1] + (1 & i)
        return result


testData = [
    {"n": 2, "ans": [0, 1, 1]},
    # {"n": 5, "ans": [0, 1, 1, 2, 1, 2]},
]

for data in testData:
    print(data["ans"] == Solution.countBits(data["n"]))
