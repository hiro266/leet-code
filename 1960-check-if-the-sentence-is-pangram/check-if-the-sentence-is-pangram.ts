function checkIfPangram(sentence: string): boolean {
  if (sentence.length < 26) return false;

  const seen: Map<string, number> = new Map(
    "abcdefghijklmnopqrstuvwxyz".split("").map((char) => [char, 0])
  );

  for (const char of sentence) {
    seen.set(char, (seen.get(char) ?? 0) + 1);
  }

  return [...seen.values()].every((currentVal) => currentVal > 0);
};