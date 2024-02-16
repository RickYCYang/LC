class Solution:
    @classmethod
    def maxDistance(self, grid: list[list[int]]) -> int:
        n = len(grid)
        init_dist = 0
        land_queue = []
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    land_queue.append([i, j, init_dist])

        max_dist = 0
        dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        while len(land_queue):
            [x, y, dist] = land_queue.pop(0)
            max_dist = max(max_dist, dist)

            for [x_dist, y_dist] in dirs:
                moved_x, moved_y = x + x_dist, y + y_dist
                if moved_x < 0 or moved_x >= n or moved_y < 0 or moved_y >= n:
                    continue
                if grid[moved_x][moved_y] == 1:
                    continue

                land_queue.append([moved_x, moved_y, dist + 1])
                grid[moved_x][moved_y] = 1

        return max_dist if max_dist > 0 else -1


test_data = [
    {
        "grid": [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1],
        ],
        "ans": 2,
    },
    {
        "grid": [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        "ans": 2,
    },
    {
        "grid": [
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
        ],
        "ans": 5,
    },
]

for data in test_data:
    print(data["ans"] == Solution.maxDistance(data["grid"]))
