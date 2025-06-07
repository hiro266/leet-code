const findAllIndexes = (arr: number[], value: number): number[] => {
  return arr.reduce((acc, curr, index) => {
    if (curr === value) acc.push(index);
    return acc;
  }, [] as number[]);
};

function findShortestSubArray(nums: number[]): number {
  const countMap: Map<number, number> = new Map();

  // 出現回数をマッピング
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  // 出現回数の最大値を取得
  const maxCount = Math.max(...Array.from(countMap.values()));

  // 出現最大回数の数値を取得
  const maxCountKeys = [];
  for (const [key, value] of Array.from(countMap)) {
    if (value === maxCount) maxCountKeys.push(key);
  }

  // 出現最大回数の数値とnumsのindexをマッピング
  const maxCountKeyIndexsMap: Map<number, number[]> = new Map();
  for (const key of maxCountKeys) {
    maxCountKeyIndexsMap.set(key, findAllIndexes(nums, key));
  }

  // インデックスだけを取得
  const indexs = Array.from(maxCountKeyIndexsMap.values());

  return Math.min(...indexs.flatMap((arr) => arr.slice(-1)[0] - arr[0] + 1));
};