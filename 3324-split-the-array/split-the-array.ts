function isPossibleToSplit(nums: number[]): boolean {
  // 偶数長でなければ分割不可能
  if (nums.length % 2 === 1) return false

  const freq = new Map<number, number>()

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
    // どれかが3回以上出現したらアウト
    if (freq.get(num)! > 2) return false
  }

  // 全ての数字が2回以下の出現なら分割可能
  return true
};