function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const flatGrid = grid.flat()
  const seenMap = new Map([...Array(flatGrid.length)].map((_, i) => [i + 1, 0]));

  for (const num of flatGrid) {
    if (seenMap.has(num)) {
      seenMap.set(num, (seenMap.get(num) ?? 0) + 1)
    }
  }

  const result = []

  for (const [key, count] of seenMap) {
    if (count === 2) result.unshift(key)
    if (count === 0) result.push(key)
  }

  return result
};