function greatestLetter(s: string): string {
  const seen = new Set(s)
  const candidate: Set<string> = new Set()

  for (const char of seen) {
    if (seen.has(char.toLowerCase()) && seen.has(char.toUpperCase())) {
      candidate.add(char.toUpperCase())
    }
  }

  return candidate.size === 0 ? "" : [...candidate].sort().slice(-1)[0]
};