function checkValid(matrix: number[][]): boolean {
  // 行の検証
  for (const row of matrix) {
    const seen = new Map(matrix.map((_, i) => [i + 1, 1]));
    for (const num of row) {
      seen.set(num, (seen.get(num) ?? 0) - 1)
    }

    if ([...seen.values()].includes(1)) return false
  }

  // 列の検証
  const colmuns: number[][] = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      colmuns[j] ? colmuns[j].push(matrix[i][j]) : colmuns.push([matrix[i][j]])
    }
  }

  for (const colmun of colmuns) {
    const seen = new Map(matrix.map((_, i) => [i + 1, 1]));
    for (const num of colmun) {
      seen.set(num, (seen.get(num) ?? 0) - 1)
    }

    if ([...seen.values()].includes(1)) return false
  }
  return true
};