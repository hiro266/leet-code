function countConsistentStrings(allowed: string, words: string[]): number {
  const seen = new Set([...allowed]);
  let validWordCount = 0;

  for (const word of words) {
    if ([...word].every((char) => seen.has(char))) {
      validWordCount++;
    }
  }

  return validWordCount;
};