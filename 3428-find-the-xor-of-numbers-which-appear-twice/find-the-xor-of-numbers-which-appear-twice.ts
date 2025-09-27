function duplicateNumbersXOR(nums: number[]): number {
  const freq = new Map()

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
  }

  const repeatedValues = []

  for (const [key, count] of freq) {
    if (count > 1) repeatedValues.push(key)
  }

  console.log("repeatedValues", repeatedValues)


  if (repeatedValues.length === 0) return 0

  // 排他的論理和
  const xor: number = repeatedValues.reduce((acc, current) => acc ^ current)
  return xor
};