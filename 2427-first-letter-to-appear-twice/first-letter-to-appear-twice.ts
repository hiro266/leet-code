function repeatedCharacter(s: string): string {
  const seen = new Set()
  for (const char of s) {
    if (seen.has(char)) return char
    seen.add(char)
  }

  return ""

};