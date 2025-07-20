function kthDistinct(arr: string[], k: number): string {
  const candidate: Set<string> = new Set()
  const excludeChars: Set<string> = new Set()

  for (const char of arr) {
    if (candidate.has(char)) {
      excludeChars.add(char)
    } else {
      candidate.add(char)
    }
  }

  for (const char of excludeChars) {
    candidate.delete(char)
  }

  return [...candidate][k - 1] ?? ""
};