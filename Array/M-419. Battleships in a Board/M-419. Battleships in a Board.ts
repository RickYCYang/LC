function countBattleships(board: string[][]): number {
  let battleships = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i > 0 && board[i - 1][j] === 'X') continue;
      if (j > 0 && board[i][j - 1] === 'X') continue;
      if (board[i][j] === 'X') battleships++;
    }
  }

  return battleships;
}
