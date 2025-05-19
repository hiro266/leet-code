function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const map: Map<string, number> = new Map();
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));

  let index = 0; // ソート後の文字列をresultのどのインデックスに入れるかを定義
  for (let i = 0; i < sortedStrs.length; i++) {

    // ソート後の文字列を持っていなければmapに追加
    if (!map.has(sortedStrs[i])) {
      map.set(sortedStrs[i], index);
      index++;
    }

    // resultの各インデックスへ格納
    const groupIndex = map.get(sortedStrs[i]);
    if (groupIndex !== undefined) {
      if (result[groupIndex] === undefined) {
        result.push([]);
      }
      result[groupIndex].push(strs[i]);
    }
  }

  return result;
};