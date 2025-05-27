function countKDifference(nums: number[], k: number): number {
  let count = 0;
  let left = 0;

  while (left < nums.length) {
    for (let right = 1 + left; right < nums.length; right++) {
      if (Math.abs(nums[left] - nums[right]) === k) count++;
    }
    left++;
  }

  return count;
};