function oddString(words: string[]): string {
  const alphabetMap: Record<string, number> = {};

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i); // 97 = 'a'
    alphabetMap[char] = i;
  }

  const WORD_LENGTH = words[0].length
  const seenDiffArr: Map<string, string[]> = new Map()

  for (let i = 0; i < words.length; i++) {
    const diffArr = []
    const currentWord = words[i]

    for (let j = 0; j < WORD_LENGTH - 1; j++) {
      const nextChar = currentWord[j + 1]
      const currentChar = currentWord[j]

      diffArr.push(alphabetMap[nextChar] - alphabetMap[currentChar])
    }
    const strDiffArr = JSON.stringify(diffArr)
    const list = seenDiffArr.get(strDiffArr) ?? [];
    list.push(currentWord);
    seenDiffArr.set(strDiffArr, list);
  }

  for (const values of seenDiffArr.values()) {
    if (values.length === 1) return values[0]
  }

  return ""
};