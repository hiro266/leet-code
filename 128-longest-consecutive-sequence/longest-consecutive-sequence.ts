function longestConsecutive(nums: number[]): number {
  const seen = Array.from(new Set(nums)).sort((a, b) => a - b);
  if (seen.length === 1) return 1;

  let maxLength = 0;
  let consecutiveCount = 1;

  for (let right = 1; right < seen.length; right++) {
    if (seen[right - 1] === seen[right] - 1) {
      consecutiveCount = consecutiveCount + 1;
    } else {
      consecutiveCount = 1;
    }

    if (maxLength < consecutiveCount) maxLength = consecutiveCount;
  }

  return maxLength;
};