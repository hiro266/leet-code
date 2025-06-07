function findErrorNums(nums: number[]): number[] {
  const result: number[] = [];
  const numsCountMap = new Map();

  for (const num of nums) {
    if (numsCountMap.has(num)) {
      numsCountMap.set(num, numsCountMap.get(num) + 1);
    } else {
      numsCountMap.set(num, 1);
    }
  }

  // 重複している数を特定
  for (const [key, value] of Array.from(numsCountMap)) {
    if (value === 2) result.unshift(key);
  }

  // 欠けている数を特定
  for (let i = 0; i < nums.length; i++) {
    if (!numsCountMap.has(i+1)) result.push(i+1);
  }

  return result;
};