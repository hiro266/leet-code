function dominantIndex(nums: number[]): number {
  const max = Math.max(...nums);
  const maxIdx = nums.indexOf(max);

  for (let i = 0; i < nums.length; i++) {
    if (i === maxIdx) continue;
    if (nums[i] * 2 > max) return -1;
  }

  return maxIdx;
};