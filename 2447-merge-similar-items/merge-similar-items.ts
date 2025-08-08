function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const seen = new Map()
  const concattedItems = items1.concat(items2)

  for (const [value, weight] of concattedItems) {
    if (seen.has(value)) {
      seen.set(value, seen.get(value) + weight)
    } else {
      seen.set(value, weight)
    }
  }

  return [...seen].sort((a, b) => a[0] - b[0])
};