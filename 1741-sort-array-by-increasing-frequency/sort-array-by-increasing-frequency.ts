function frequencySort(nums: number[]): number[] {
  const seen = new Map();
  for (const num of nums) {
    seen.set(num, (seen.get(num) ?? 0) + 1);
  }
  console.log("seen", seen);

  const sortedNums = [...seen]
    .sort(([keyA, countA], [keyB, countB]) => {
      if (countA !== countB) {
        return countA - countB; // 出現回数が少ない順（昇順）
      } else {
        return keyB - keyA; // 出現回数が同じなら値の大きい順（降順）
      }
    })
    .map(([key]) => key);

  console.log("sortedNums", sortedNums);

  const result = [];

  for (const targetNum of sortedNums) {
    for (const num of nums) {
      if (num === targetNum) result.push(num);
    }
  }

  console.log("result", result);
  return result;
};