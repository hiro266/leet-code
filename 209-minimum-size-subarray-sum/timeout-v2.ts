function minSubArrayLen(target: number, nums: number[]): number {
  let result = null;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (true) {
      const slice = nums.slice(left, right + 1);
      const sum = slice.reduce((acc, current) => acc + current);

      if (sum >= target) {
        if (slice.length === 1) return 1;
        if (result === null || result > slice.length) result = slice.length;
        left++;
        continue;
      } else {
        right++;
        break;
      }
    }
  }

  return result === null ? 0 : result;
}
