class Solution:
    @classmethod
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        points.sort(key=lambda a: a[1])
        min_arrow = 1
        prev_idx = 0
        for i in range(1, len(points)):
            _, prev_end = points[prev_idx]
            start, _ = points[i]
            if start <= prev_end:
                continue
            min_arrow += 1
            prev_idx = i
        return min_arrow


testData = [
    {
        "points": [
            [10, 16],
            [2, 8],
            [1, 6],
            [7, 12],
        ],
        "ans": 2,
    },
    {
        "points": [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
        ],
        "ans": 4,
    },
    {
        "points": [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
        ],
        "ans": 2,
    },
]

for data in testData:
    print(data["ans"] == Solution.findMinArrowShots(data["points"]))
