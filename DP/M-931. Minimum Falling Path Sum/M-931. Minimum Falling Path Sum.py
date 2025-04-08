class Solution:
    @classmethod
    def minFallingPathSum(self, matrix) -> int:
        n = len(matrix)
        min_path_sum = [[0 for j in range(n)] for i in range(n)]
        min_path_sum[0] = [*matrix[0]]

        for i in range(1, n):
            for j in range(n):
                cur_value = matrix[i][j]
                min_path_sum[i % 2][j] = min_path_sum[(i-1) % 2][j] + cur_value
                if j - 1 >= 0:
                    min_path_sum[i % 2][j] = min(min_path_sum[i % 2][j], min_path_sum[(
                        i-1) % 2][j - 1] + cur_value)
                if j < n - 1:
                    min_path_sum[i % 2][j] = min(min_path_sum[i % 2][j], min_path_sum[(
                        i-1) % 2][j + 1] + cur_value)

        return min(min_path_sum[(n - 1) % 2])


test_data = [
    {
        "data": [
            [2, 1, 3],
            [6, 5, 4],
            [7, 8, 9],
        ],
        "ans": 13,
    },
    {
        "data": [
            [-19, 57],
            [-40, -5]
        ],
        "ans": -59,
    },

]

for data in test_data:
    print(data["ans"] == Solution.minFallingPathSum(data["data"]))
