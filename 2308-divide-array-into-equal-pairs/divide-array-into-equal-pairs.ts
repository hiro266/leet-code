function divideArray(nums: number[]): boolean {
  if (nums.length % 2 === 1) return false

  const seen = new Map()
  for (const num of nums) {
    seen.set(num, (seen.get(num) ?? 0) + 1)
  }

  for (const [key, count] of seen) {
    if (count % 2 === 1) return false
  }

  return true 
};