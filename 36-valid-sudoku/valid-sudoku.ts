// 重複判定
const hasDuplicates = (twoDimensionalArr: string[][]): boolean => {
  for (const row of twoDimensionalArr) {
    const set = new Set();
    for (const str of row) {
      if (str === ".") continue;
      if (set.has(str)) return false;
      set.add(str);
    }
  }
  return true;
};

// 行
const isRowValid = (board: string[][]): boolean => {
  return hasDuplicates(board);
};

// 列
const isColumnValid = (board: string[][]): boolean => {
  const formattedBoard: string[][] = Array.from({ length: 9 }, () => []);
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      formattedBoard[j].push(row[j]);
    }
  }
  return hasDuplicates(formattedBoard);
};

// 3*3
const isBlockValid = (board: string[][]): boolean => {
  const formattedBoard: string[][] = Array.from({ length: 9 }, () => []);

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (i < 3) {
        if (j < 3) {
          formattedBoard[0].push(row[j]);
        } else if (j > 2 && j < 6) {
          formattedBoard[1].push(row[j]);
        } else {
          formattedBoard[2].push(row[j]);
        }
      } else if (i > 2 && i < 6) {
        if (j < 3) {
          formattedBoard[3].push(row[j]);
        } else if (j > 2 && j < 6) {
          formattedBoard[4].push(row[j]);
        } else {
          formattedBoard[5].push(row[j]);
        }
      } else {
        if (j < 3) {
          formattedBoard[6].push(row[j]);
        } else if (j > 2 && j < 6) {
          formattedBoard[7].push(row[j]);
        } else {
          formattedBoard[8].push(row[j]);
        }
      }
    }
  }

  return hasDuplicates(formattedBoard);
};

function isValidSudoku(board: string[][]): boolean {
  return isRowValid(board) && isColumnValid(board) && isBlockValid(board);
};