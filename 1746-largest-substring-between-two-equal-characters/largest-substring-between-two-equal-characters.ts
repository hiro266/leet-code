// 該当文字が一致する全てのindex値を返す
const findAllIndices = (str: string, search: string): number[] => {
  const indices: number[] = [];
  let index = str.indexOf(search);

  while (index !== -1) {
    indices.push(index);
    index = str.indexOf(search, index + 1);
  }

  return indices;
};

function maxLengthBetweenEqualCharacters(s: string): number {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }
  console.log("charCount", charCount);

  // 同じ文字が2回出現しなければ-1を返す
  if (Array.from(charCount.values()).every((value) => value === 1)) return -1;

  // charCountから文字列が2回以上出現したもののみにフィルター
  const duplicatedChars: string[] = [...charCount]
    .filter(([_, value]) => value > 1)
    .map(([key, _]) => key);
  console.log("duplicatedChars", duplicatedChars);

  let result = 0;

  for (const char of duplicatedChars) {
    const indexs = findAllIndices(s, char);
    const charDistance = Math.abs(indexs[0] - indexs.slice(-1)[0] + 1);

    if (charDistance > result) result = charDistance;
  }

  console.log("result", result);
  return result;
};