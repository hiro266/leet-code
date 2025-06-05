function longestPalindrome(s: string): number {
  const seen = new Map();

  for (const char of s) {
    if (seen.has(char)) {
      seen.set(char, seen.get(char) + 1);
    } else {
      seen.set(char, 1);
    }
  }

  const values: number[] = Array.from(seen.values());
  const evenValues = values.filter((num) => num % 2 == 0);
  const oddValues = values.filter((num) => num % 2 == 1);

  if (oddValues.length === 0 && evenValues) {
    return evenValues.reduce((acc, current) => acc + current);
  }

  const maxOddValue = Math.max(...oddValues);

  // 最大の奇数値を使ったか？のフラグ
  let usedMaxOdd = false;
  const adjustedOddValues = oddValues.map((num) => {
    if (num === maxOddValue && !usedMaxOdd) {
      usedMaxOdd = true;
      return num;
    }
    return num - 1;
  });

  const result = evenValues
    .concat(adjustedOddValues)
    .reduce((acc, current) => acc + current);

  return result;
};