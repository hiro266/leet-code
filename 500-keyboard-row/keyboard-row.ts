function findWords(words: string[]): string[] {
  const result = [];
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  for (const word of words) {
    // 小文字にして文字列から配列に変換
    const chars = [...word.toLocaleLowerCase()];

    // charsが全て含まれているrowが1つでもあればwordを返す
    if (rows.some((row) => chars.every((char) => row.has(char)))) {
      result.push(word);
    }
  }

  return result;
};