class Solution:
    @classmethod
    def equalPairs(self, grid: list[list[int]]) -> int:
        n = len(grid)
        row_nums_map = {}
        swapped_grid = [[] for _ in range(n)]
        result = 0

        # initiate swapped_grid and row_nums_map
        for row in range(n):
            for col in range(n):
                swapped_grid[col].append(grid[row][col])
            concat_nums = "-".join(str(num) for num in grid[row])
            if concat_nums not in row_nums_map:
                row_nums_map[concat_nums] = []
            row_nums_map[concat_nums].append(row)

        # check the equal pairs
        for nums in swapped_grid:
            concat_nums = "-".join(str(num) for num in nums)
            result += len(row_nums_map.get(concat_nums) or [])

        return result


testData = [
    {
        "grid": [
            [3, 2, 1],
            [1, 7, 6],
            [2, 7, 7],
        ],
        "ans": 1,
    },
    {
        "grid": [
            [3, 1, 2, 2],
            [1, 4, 4, 5],
            [2, 4, 2, 2],
            [2, 4, 2, 2],
        ],
        "ans": 3,
    },
    {
        "grid": [
            [11, 1],
            [1, 11],
        ],
        "ans": 2,
    },
]

for data in testData:
    print(data["ans"] == Solution.equalPairs(data["grid"]))
