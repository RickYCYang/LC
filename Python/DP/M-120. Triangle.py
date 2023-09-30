class Solution:
    @classmethod
    def minimumTotal(self, triangle) -> int:
        n = len(triangle)
        min_path = [[0 for j in range(n)] for i in range(2)]
        min_path[0][0] = triangle[0][0]

        for i in range(1, n):
            for j in range(i + 1):
                cur_val = triangle[i][j]
                if j == 0:
                    min_path[i % 2][j] = min_path[(i - 1) % 2][j] + cur_val
                elif j == i:
                    min_path[i % 2][j] = min_path[(i - 1) % 2][j - 1] + cur_val
                else:
                    min_path[i % 2][j] = min(
                        min_path[(i - 1) % 2][j], min_path[(i - 1) % 2][j - 1]) + cur_val

        return min(min_path[(n - 1) % 2])


test_data = [
    {
        "data": [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
        "ans": 11,
    },
    {
        "data": [[-10]],
        "ans": -10,
    },
]

for data in test_data:
    print(data["ans"] == Solution.minimumTotal(data["data"]))
