function repeatedNTimes(nums: number[]): number {
  const seen = new Set()

  for (const num of nums) {
    if (seen.has(num)) return num
    seen.add(num)
  }
  return 0;

};