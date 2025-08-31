function maximumNumberOfStringPairs(words: string[]): number {
  let pairCount = 0

  for (let i = 0; i < words.length; i++) {
    const baseWord = words[i]
    for (let j = i + 1; j < words.length; j++) {
      const targetWord = words[j].split('').reverse().join('')
      if (baseWord === targetWord) {
        pairCount++
        break
      }
    }
  }

  return pairCount

};