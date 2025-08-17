function similarPairs(words: string[]): number {
  let similarCount = 0

  for (let i = 0; i < words.length; i++) {
    const basisSeen = new Set()
    for (const char of words[i]) {
      basisSeen.add(char)
    }

    for (let j = i + 1; j < words.length; j++) {
      const targetSeen = new Set()
      for (const char of words[j]) {
        targetSeen.add(char)
      }

      if (JSON.stringify([...basisSeen].sort()) === JSON.stringify([...targetSeen].sort())) {
        similarCount++
      }
    }
  }

  return similarCount
};