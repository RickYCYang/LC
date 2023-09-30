import sys


class Solution:
    @classmethod
    def minFallingPathSum(self, grid) -> int:
        n = len(grid)
        min_paths = [[0 for j in range(n)] for i in range(n)]
        max_safe_int = sys.maxsize
        last_row_1st_min_num_idx = -1
        last_row_2nd_min_num_idx = -1
        # init min_paths[0], last_row_1st_min_num_idx, and last_row_2nd_min_num_idx
        for i in range(n):
            val = grid[0][i]
            min_paths[0][i] = val
            if (val < (max_safe_int if last_row_1st_min_num_idx == -1 else grid[0][last_row_1st_min_num_idx])):
                last_row_2nd_min_num_idx = last_row_1st_min_num_idx
                last_row_1st_min_num_idx = i
            elif (val < (max_safe_int if last_row_2nd_min_num_idx == -1 else grid[0][last_row_2nd_min_num_idx])):
                last_row_2nd_min_num_idx = i

        # start travaling
        for i in range(1, n):
            cur_row_1st_min_num_idx = -1
            cur_row_2nd_min_num_idx = -1
            for j in range(n):
                val = grid[i][j]
                if j != last_row_1st_min_num_idx:
                    min_paths[i][j] = val + \
                        min_paths[i - 1][last_row_1st_min_num_idx]
                else:
                    min_paths[i][j] = val + \
                        min_paths[i - 1][last_row_2nd_min_num_idx]
                # update current row's 2 smallest number index
                if (min_paths[i][j] < (max_safe_int if cur_row_1st_min_num_idx == -1 else min_paths[i][cur_row_1st_min_num_idx])):
                    cur_row_2nd_min_num_idx = cur_row_1st_min_num_idx
                    cur_row_1st_min_num_idx = j
                elif (min_paths[i][j] < (max_safe_int if cur_row_2nd_min_num_idx == -1 else min_paths[i][cur_row_2nd_min_num_idx])):
                    cur_row_2nd_min_num_idx = j
            last_row_1st_min_num_idx = cur_row_1st_min_num_idx
            last_row_2nd_min_num_idx = cur_row_2nd_min_num_idx
        return min(min_paths[n-1])


test_data = [
    {
        "data": [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        "ans": 13,  # 1, 5, 7
    },
    {
        "data": [[7]],
        "ans": 7,
    },
    {
        "data": [
            [2, 2, 1, 2, 2],
            [2, 2, 1, 2, 2],
            [2, 2, 1, 2, 2],
            [2, 2, 1, 2, 2],
            [2, 2, 1, 2, 2],
        ],
        "ans": 7,
    },
    {
        "data": [
            [-37, 51, -36, 34, -22],
            [82, 4, 30, 14, 38],
            [-68, -52, -92, 65, -85],
            [-49, -3, -77, 8, -19],
            [-60, -71, -21, -62, -73]
        ],
        "ans": -268,
    }
]

for data in test_data:
    print(data["ans"] == Solution.minFallingPathSum(data["data"]))
