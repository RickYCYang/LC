/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const [m, n] = [board.length, board[0].length];

  const isAtEdge = (x, y) => {
    return (
      board[x][y] === 'O' && (x === 0 || y === 0 || x === m - 1 || y === n - 1)
    );
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isAtEdge(i, j)) dfs(board, i, j);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X';
      if (board[i][j] === 'E') board[i][j] = 'O';
    }
  }

  return board;
};

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const dfs = (board, x, y) => {
  board[x][y] = 'E';
  for (const [mx, my] of dirs) {
    const [nx, ny] = [x + mx, y + my];
    if (board[nx]?.[ny] === 'O') dfs(board, nx, ny);
  }
};
