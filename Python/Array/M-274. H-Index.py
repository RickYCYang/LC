class Solution:
    @classmethod
    def hIndex(self, citations: list) -> int:
        citations.sort(reverse=True)
        i = 0
        while i < len(citations) and i < citations[i]:
            i = i + 1

        return i


test_data = [
    [3, 0, 6, 1, 5],  # 3
    [1, 3, 1],  # 1
    [100],  # 1
    [0],  # 0
    [1],  # 1
    [11, 15],  # 2
]

for data in test_data:
    print(Solution.hIndex(data))
