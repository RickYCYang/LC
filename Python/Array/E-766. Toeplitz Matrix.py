class Solution:
    @classmethod
    def isToeplitzMatrix(self, matrix) -> bool:
        m, n = len(matrix), len(matrix[0])
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] != matrix[i-1][j-1]:
                    return False
        return True


test_data = [
    {
        "matrix": [
            [1, 2, 3, 4],
            [5, 1, 2, 3],
            [9, 5, 1, 2],
        ],
        "ans": True,
    },
    {
        "matrix": [
            [1, 2],
            [2, 2],
        ],
        "ans": False,
    },
]

for data in test_data:
    print(data["ans"] == Solution.isToeplitzMatrix(data["matrix"]))
