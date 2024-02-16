from collections import deque


class Solution:
    @classmethod
    def nearestExit(self, maze: list[list[str]], entrance: list[int]) -> int:
        row0, col0 = entrance
        m, n = len(maze), len(maze[0])
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        queue = deque([[row0, col0, 0]])
        maze[row0][col0] = "+"

        def exceed_boundary(row: int, col: int):
            return row > m - 1 or row < 0 or col > n - 1 or col < 0

        def reach_boundary(row: int, col: int):
            return row == m - 1 or row == 0 or col == n - 1 or col == 0

        while queue:
            row, col, step = queue.popleft()
            for dist_row, dist_col in directions:
                moved_row, moved_col = row + dist_row, col + dist_col
                if (
                    exceed_boundary(moved_row, moved_col)
                    or maze[moved_row][moved_col] == "+"
                ):
                    continue
                if reach_boundary(moved_row, moved_col):
                    return step + 1
                maze[moved_row][moved_col] = "+"
                queue.append([moved_row, moved_col, step + 1])

        return -1


testData = [
    {
        "maze": [
            ["+", "+", ".", "+"],
            [".", ".", ".", "+"],
            ["+", "+", "+", "."],
        ],
        "entrance": [1, 2],
        "ans": 1,
    },
    {
        "maze": [
            ["+", "+", "+"],
            [".", ".", "."],
            ["+", "+", "+"],
        ],
        "entrance": [1, 0],
        "ans": 2,
    },
    {
        "maze": [[".", "+"]],
        "entrance": [0, 0],
        "ans": -1,
    },
]

for data in testData:
    print(data["ans"] == Solution.nearestExit(data["maze"], data["entrance"]))
