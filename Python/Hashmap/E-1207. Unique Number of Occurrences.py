class Solution:
    @classmethod
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        arr_map = {}
        for num in arr:
            arr_map[num] = (arr_map.get(num) or 0) + 1
        occur_set = set(arr_map.values())
        return len(arr_map.keys()) == len(occur_set)


testData = [
    {
        "arr": [1, 2, 2, 1, 1, 3],
        "ans": True,
    },
    {
        "arr": [1, 2],
        "ans": False,
    },
    {
        "arr": [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
        "ans": True,
    },
]

for data in testData:
    print(data["ans"] == Solution.uniqueOccurrences(data["arr"]))
