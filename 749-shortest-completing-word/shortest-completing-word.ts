function shortestCompletingWord(licensePlate: string, words: string[]): string {
  // [...] → 中のいずれかにマッチ | \d → 数字 | \s → スペース、タブ、改行 | \g → 全体置換　| ← にマッチしたら削除
  const processedPlate = licensePlate.replace(/[\d\s]/g, "").toLowerCase();
  const initCountMap: Map<string, number> = new Map();

  for (const char of processedPlate) {
    initCountMap.set(char, (initCountMap.get(char) ?? 0) + 1);
  }

  let countMap = new Map(initCountMap);
  let result = "";
  for (const word of words) {
    for (const char of word) {
      const count = countMap.get(char);
      if (count !== undefined && count > 0) {
        countMap.set(char, count - 1);
      }
    }
    const values = Array.from(countMap.values());
    if (values.every((v) => v === 0)) {
      if (result === "" || result.length > word.length) result = word;
    }
    countMap = new Map(initCountMap);
  }

  return result;
};