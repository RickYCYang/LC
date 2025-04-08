class Solution:
    @classmethod
    def maxOperations(self, nums: list[int], k: int) -> int:
        map = {}
        operations = 0
        for num in nums:
            diff = k - num
            if diff not in map:
                map[num] = (map.get(num) or 0) + 1
                continue

            map[diff] = map[diff] - 1
            if map[diff] == 0:
                del map[diff]
            operations += 1

        return operations


testData = [
    {
        "nums": [1, 2, 3, 4],
        "k": 5,
        "ans": 2,
    },
    {
        "nums": [3, 1, 3, 4, 3],  # [1, 3, 3, 3, 4]
        "k": 6,
        "ans": 1,
    },
]

for data in testData:
    print(data["ans"] == Solution.maxOperations(data["nums"], data["k"]))
