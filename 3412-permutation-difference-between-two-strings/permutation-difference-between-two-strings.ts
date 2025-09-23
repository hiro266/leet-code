function findPermutationDifference(s: string, t: string): number {
  let subDiff = 0

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i]
    const tIndex = t.indexOf(sChar)

    const diff = Math.abs(i - tIndex)
    subDiff = subDiff + diff
  }

  return subDiff
};