function rearrangeCharacters(s: string, target: string): number {
  const seen = new Map()
  for (const char of s) {
    seen.set(char, (seen.get(char) ?? 0) + 1)
  }

  let result = 0
  let isIterate = true

  while (isIterate) {
    const isValie = [...target].every((char) => {
      if (seen.has(char) && seen.get(char) > 0) {
        seen.set(char, seen.get(char) - 1)
        return true
      } else {
        return false
      }
    })
    isValie ? result++ : isIterate = false
  }

  return result
};