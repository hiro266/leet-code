function maximumLengthSubstring(s: string): number {
  let maxSubStr = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const seen = new Map()
      const targetSubStr = s.slice(i, j)

      for (const str of targetSubStr) {
        seen.set(str, (seen.get(str) ?? 0) + 1)
      }

      const maxFreq = Math.max(...seen.values())

      if (maxFreq <= 2 && targetSubStr.length > maxSubStr) {
        maxSubStr = targetSubStr.length
      }
    }
  }

  return maxSubStr
};