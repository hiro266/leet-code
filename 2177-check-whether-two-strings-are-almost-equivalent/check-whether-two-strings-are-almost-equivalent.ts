function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const count1 = new Map()
  const count2 = new Map()
  const diff = new Map()

  for (const char of word1) {
    count1.set(char, (count1.get(char) ?? 0) + 1)
  }

  for (const char of word2) {
    count2.set(char, (count2.get(char) ?? 0) + 1)
  }

  for (const [key, value] of count1) {
    if (count2.has(key)) {
      diff.set(key, Math.abs(count2.get(key) - value))
    } else {
      diff.set(key, value)
    }
  }

  for (const [key, value] of count2) {
    if (!diff.has(key)) {
      diff.set(key, value)
    }
  }

  const result = [...diff.values()].every((count) => count >= 0 && count <= 3)
  return result
};