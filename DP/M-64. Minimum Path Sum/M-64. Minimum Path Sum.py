
class Solution:
    @classmethod
    def minPathSum(self, grid: list) -> int:
        m, n = len(grid), len(grid[0])
        min_path = [[0 for j in range(n)] for i in range(m)]
        min_path[0][0] = grid[0][0]

        for row in range(m):
            for col in range(n):
                if row > 0 and col > 0:
                    min_path[row][col] = grid[row][col] + \
                        min(min_path[row - 1][col], min_path[row][col - 1])
                elif row > 0:
                    min_path[row][col] = grid[row][col] + \
                        min_path[row - 1][col]
                elif col > 0:
                    min_path[row][col] = grid[row][col] + \
                        min_path[row][col - 1]

        return min_path[m-1][n-1]


test_data = [
    {
        "data": [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ],
        "ans": 7,
    },
    {
        "data": [
            [1, 2, 3],
            [4, 5, 6],
        ],
        "ans": 12,
    },
]

for data in test_data:
    print(data["ans"] == Solution.minPathSum(data["data"]))
