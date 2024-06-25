class Solution:
    @classmethod
    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        removed = 0
        prev_idx = 0
        for i in range(1, len(intervals)):
            _, prev_end = intervals[prev_idx]
            start, _ = intervals[i]
            if start < prev_end:
                removed += 1
            else:
                prev_idx = i
        return removed


test_data = [
    {
        "intervals": [
            [1, 2],
            [1, 3],
            [2, 3],
            [3, 4],
        ],
        "ans": 1,
    },
    {
        "intervals": [
            [1, 2],
            [1, 2],
            [1, 2],
        ],
        "ans": 2,
    },
    {
        "intervals": [
            [1, 2],
            [2, 3],
        ],
        "ans": 0,
    },
    {
        "intervals": [
            [0, 2],
            [1, 3],
            [2, 4],
            [3, 5],
            [4, 6],
        ],
        "ans": 2,
    },
    {
        "intervals": [
            [1, 2],
            [2, 3],
            [3, 4],
            [-100, -2],
            [5, 7],
        ],
        "ans": 0,
    },
    {
        "intervals": [
            [-52, 31],
            [-73, -26],
            [82, 97],
            [-65, -11],
            [-62, -49],
            [95, 99],
            [58, 95],
            [-31, 49],
            [66, 98],
            [-63, 2],
            [30, 47],
            [-40, -26],
        ],
        "ans": 7,
    },
]

for data in test_data:
    print(data["ans"] == Solution.eraseOverlapIntervals(data["intervals"]))
