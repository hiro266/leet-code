function makeEqual(words: string[]): boolean {
  if (words.length === 1) return true;
  const charCount: Map<string, number> = new Map();

  for (const char of words.join("")) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  const values = [...charCount.values()];
  if (values.every((value) => value === 1)) return false;
  return values.every((value) => value === values[0]);
}
