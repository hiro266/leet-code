/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const zeroLocations = []; // -> [行インデックス, 列インデックス]

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      if (matrix[rowIdx][columnIdx] === 0) {
        zeroLocations.push([rowIdx, columnIdx]);
      }
    }
  }

  for (let i = 0; i < zeroLocations.length; i++) {
    const row = matrix[zeroLocations[i][0]];
    const column = zeroLocations[i][1];

    // 対象行を0にする
    row.splice(0, row.length, ...row.fill(0));

    // 対象列を0にする
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0;
    }
  }
};