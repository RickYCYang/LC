class Solution:
    @classmethod
    def uniquePaths(self, m: int, n: int) -> int:
        path = m * [n * [0]]
        path[0][0] = 1

        for row in range(m):
            for col in range(n):
                if row > 0 and col > 0:
                    path[row][col] = path[row][col - 1] + path[row - 1][col]
                elif row > 0:
                    path[row][col] = path[row - 1][col]
                elif col > 0:
                    path[row][col] = path[row][col - 1]

        print(path)
        return path[m-1][n-1]


test_data = [
    {"m": 3, "n": 7, "ans": 28},
    {"m": 3, "n": 2, "ans": 3},
]

for data in test_data:
    print(data["ans"] == Solution.uniquePaths(data["m"], data["n"]))
