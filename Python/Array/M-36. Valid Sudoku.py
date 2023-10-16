class Solution:
    @classmethod
    def isValidSudoku(self, board) -> bool:
        row_cache = [set() for i in range(9)]
        col_cache = [set() for i in range(9)]
        box_cache = [set() for i in range(9)]
        for row in range(9):
            for col in range(9):
                cell = board[row][col]
                if cell == '.':
                    continue
                if cell in row_cache[row]:
                    return False
                if cell in col_cache[col]:
                    return False
                box_idx = (row // 3) * 3 + (col // 3)
                if cell in box_cache[box_idx]:
                    return False
                row_cache[row].add(cell)
                col_cache[col].add(cell)
                box_cache[box_idx].add(cell)
        return True


test_data = [
    {
        "matrix": [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
        "ans": True,
    },
    {
        "matrix": [
            ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
        "ans": False,
    },
]

for data in test_data:
    print(data["ans"] == Solution.isValidSudoku(data["matrix"]))
