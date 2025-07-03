function canFormArray(arr: number[], pieces: number[][]): boolean {
  const nums: number[] = [];
  for (const num of arr) {
    if (nums.includes(num)) continue;
    for (const piece of pieces) {
      if (piece[0] === num) {
        nums.push(...piece);
        break;
      }
    }
  }

  return JSON.stringify(arr) === JSON.stringify(nums) ? true : false;
};