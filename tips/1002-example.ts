export function commonChars(words: string[]): string[] {
  const firstWord = words[0].split("");
  const result = [];

  for (const char of firstWord) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }

  return result;
}
