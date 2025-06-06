function findWords(words: string[]): string[] {
  const result: string[] = [];
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  for (const word of words) {
    const targetKeybord = keys
      .filter((key) => key.includes(word[0].toLowerCase()))
      .flatMap((target) => target);

    if (
      word.split("").every((char) => targetKeybord.includes(char.toLowerCase()))
    ) {
      result.push(word);
    }
  }

  return result;

};