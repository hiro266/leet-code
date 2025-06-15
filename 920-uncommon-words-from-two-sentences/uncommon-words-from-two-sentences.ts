function uncommonFromSentences(s1: string, s2: string): string[] {
  const countMap = new Map();
  const SPACE = "\u0020";
  const words = s1.concat(SPACE + s2).split(/\s+/);

  for (const word of words) {
    countMap.set(word, (countMap.get(word) ?? 0) + 1);
  }

  return Array.from(countMap)
    .filter(([_, count]) => count === 1)
    .map(([key, _]) => key);

};