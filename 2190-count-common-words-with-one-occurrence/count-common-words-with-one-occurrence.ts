function countWords(words1: string[], words2: string[]): number {
  let count = 0
  const words1Count = new Map()
  const words2Count = new Map()

  for (const word of words1) {
    words1Count.set(word, (words1Count.get(word) ?? 0) + 1)
  }

  for (const word of words2) {
    words2Count.set(word, (words2Count.get(word) ?? 0) + 1)
  }

  for (const [word, _] of [...words1Count].filter(([_, value]) => value === 1)) {
    if (words2Count.has(word) && words2Count.get(word) === 1) count++
  }

  return count
};