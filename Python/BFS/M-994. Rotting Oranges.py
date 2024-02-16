from collections import deque


class Solution:
    @classmethod
    def orangesRotting(self, grid: list[list[int]]) -> int:
        FRESH, ROTTEN = 1, 2
        m, n = len(grid), len(grid[0])
        rotten_orange_queue = deque([])
        fresh_oranges = 0

        for i in range(m):
            for j in range(n):
                if grid[i][j] == ROTTEN:
                    rotten_orange_queue.append([i, j, 0])
                elif grid[i][j] == FRESH:
                    fresh_oranges += 1
        if fresh_oranges == 0:
            return 0

        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        def is_within_border(row: int, col: int):
            return row < m and row >= 0 and col < n and col >= 0

        while rotten_orange_queue:
            row, col, minutes = rotten_orange_queue.popleft()
            for row_dist, col_dist in directions:
                moved_row, moved_col = row + row_dist, col + col_dist
                if (
                    is_within_border(moved_row, moved_col)
                    and grid[moved_row][moved_col] == FRESH
                ):
                    grid[moved_row][moved_col] = ROTTEN
                    fresh_oranges -= 1
                    if fresh_oranges == 0:
                        return minutes + 1
                    rotten_orange_queue.append([moved_row, moved_col, minutes + 1])
        return -1


testData = [
    {
        "grid": [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
        ],
        "ans": 4,
    },
    {
        "grid": [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
        ],
        "ans": -1,
    },
    {
        "grid": [[0, 2]],
        "ans": 0,
    },
]

for data in testData:
    print(data["ans"] == Solution.orangesRotting(data["grid"]))
