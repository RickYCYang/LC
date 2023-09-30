class Solution:
    @classmethod
    def uniquePathsWithObstacles(self, obstacleGrid) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        path = [[0 for j in range(n)] for i in range(m)]
        path[0][0] = 1 if obstacleGrid[0][0] == 0 else 0

        for row in range(m):
            for col in range(n):
                if obstacleGrid[row][col] == 1:
                    continue
                else:
                    if row > 0 and col > 0:
                        path[row][col] = path[row][col - 1] + \
                            path[row - 1][col]
                    elif row > 0:
                        path[row][col] = path[row - 1][col]
                    elif col > 0:
                        path[row][col] = path[row][col - 1]
        # print(path)
        return path[m-1][n-1]


test_data = [
    {
        "data": [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ],
        "ans": 2,
    },
    {
        "data": [
            [0, 1],
            [0, 0],
        ],
        "ans": 1,
    },
    {
        "data": [[1]],
        "ans": 0,
    },
]

for data in test_data:
    print(data["ans"] == Solution.uniquePathsWithObstacles(data["data"]))
