function mostCommonWord(paragraph: string, banned: string[]): string {
  // 小文字, 句読点除去, 配列化, 禁止単語の除去
  const proccecdParagraph = paragraph
    .toLocaleLowerCase()
    .split(/[\s\p{P}]+/gu) // []内に一致するパターンが一つ以上あれば分割 
    .filter((word) => word.trim() !== "" && !banned.includes(word));

  const wordCount = new Map();
  for (const word of proccecdParagraph) {
    wordCount.set(word, (wordCount.get(word) ?? 0) + 1);
  }

  let result = "";
  let maxCount = undefined;

  for (const [key, count] of wordCount) {
    if (maxCount === undefined || count > maxCount) {
      result = key;
      maxCount = count;
    }
  }

  return result;
};